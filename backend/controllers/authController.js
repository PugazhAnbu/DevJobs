const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
//user model
const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwt");

//Register a User

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  //check user email already exist or not
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already Exist" });
  }
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  sendToken(user, 201, res);
});

//Login user
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  //user found with this email it returns the user obj and store it in user variable as object
  // if not found it returns null. !null is true. null means it false
  console.log("user ---->", user);
  if (!user) {
    return next(new ErrorHandler("User Not found", 401));
  }

  if (!(await user.isValidPassword(password))) {
    return next(new ErrorHandler("Invalid Email and  Password", 401));
  }
  sendToken(user, 200, res);
});

module.exports = { registerUser, loginUser };

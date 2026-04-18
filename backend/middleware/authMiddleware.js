const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandler");

const isAuthenticate = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token;
  // const authHeader = req.headers.authorization;
  if (!token) {
    // if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new ErrorHandler("Login user first to access", 401));
  }
  // const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //for more security or production we have to fetch from db. why bcoz if user role admin to user change. still that user as admin if u use jwt token payload. bcoz token expire 1d. so better use we have to hit DB on every request.

  // req.user = await User.findById(decoded.id);
  req.user = decoded;
  next();
});

exports.isAdmin = asyncHandler((...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`Role ${req.user.role} is not allowed`));
    }
    next();
  };
});
module.exports = isAuthenticate;

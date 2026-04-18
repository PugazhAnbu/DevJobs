const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

router.get("/login", loginUser);
router.post("/createUser", registerUser);

module.exports = router;

const sendToken = (user, statusCode, res) => {
  let token = user.getJwtToken();

  const options = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_EXPIRES_TIME + 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;

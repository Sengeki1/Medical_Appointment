const jwt = require("jsonwebtoken");
const config = process.env;
const User = require("../models/schema");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token; // Ensure this line is correct

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    const userx = await User.findById(decoded.id).select('-password')
    req.user = userx;
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
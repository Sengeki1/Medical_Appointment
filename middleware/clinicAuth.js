const jwt = require("jsonwebtoken");
const config = process.env;
const Clinic = require("../models/clinicSchema");

const verifyToken = async (req, res, next) => {
  const authToken = req.cookies.authToken; // Ensure this line is correct

  if (!authToken) {
    return res.status(403).send("A token is required");
  }
  try {
    const decoded = jwt.verify(authToken, config.TOKENCLINIC_KEY);
    const clinicx = await Clinic.findById(decoded.id)
    if (!clinicx) {
      return res.status(404).send("Clinic not found");
    }
    req.user = clinicx;
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
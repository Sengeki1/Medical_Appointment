require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretTokenClinic = (id) => {
    return jwt.sign({ id }, process.env.TOKENCLINIC_KEY, {expiresIn: 3 * 24 * 60 * 60,});
};
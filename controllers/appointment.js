const Clinic = require("../models/clinicSchema");

const bcrypt = require("bcryptjs");
const env = require("dotenv");
const { createSecretTokenClinic } = require("../util/generateTokenClinic");

env.config();

const appointment = async(req, res) => {
    try {
        const { appointment_type, current_location } = req.body;
        
        const type = appointment_type
        const location = current_location
        if (!(type && location)) {
            return res.status(400).json({ message: "Must fill both" });
        }

        const clinic = await Clinic.findOne({ location });

        if (!clinic) {
            return res.status(404).json({ message: "Location not available" });
        }

        const authToken = createSecretTokenClinic(clinic._id);

        res.cookie("authToken", authToken, {
            path: "/", 
            expires: new Date(Date.now() + 86400000),
            secure: true,
            httpOnly: true,
            sameSite: "None",
        });

        res.redirect('/success')
    } catch(err) {
        console.log("Erro: ", err)
    }
};
module.exports = appointment;
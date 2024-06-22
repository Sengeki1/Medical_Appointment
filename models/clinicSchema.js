const mongoose = require("mongoose");

const clinicSchema = mongoose.Schema({
    clinic_name: { type: String, required: true, unique: true },
    location: { type: String, required: true, },
    type: {type: String, required: true}, 
    doctor: { type: String, required: true, },
    employees: { type: Number, required: true },
})
const clinic = mongoose.model("Clinic", clinicSchema);
module.exports = clinic;
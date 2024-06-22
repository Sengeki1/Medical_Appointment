const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    sex: { type: String, required: true },
    role: { type: String, required: true, enum: ['user', 'admin', 'super-admin'], default: 'user' },
})
const user = mongoose.model("User",userSchema);
module.exports = user;
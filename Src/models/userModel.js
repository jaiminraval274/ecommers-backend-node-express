const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add name"],
    },
    email: {
        type: String,
        require: [true, "Please add phone number"],
        unique: [true, "Email already used"],
    },
    password: {
        type: String,
        require: [true, "Please add password"],
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("users", userSchema);
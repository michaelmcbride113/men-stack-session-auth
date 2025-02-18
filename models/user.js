const mongoose = require("mongoose");

// required: true is a validation which is a boolean
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const User = mongoose. model('User', userSchema);

module.exports = User;
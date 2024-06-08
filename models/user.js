const mongoose = require('mongoose')
const userschema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        jobTitle: {
            type: String
        },
        gender: {
            type: String
        }
    },
    { timestamps: true }
);

const User = mongoose.model('user', userschema);

module.exports = User;
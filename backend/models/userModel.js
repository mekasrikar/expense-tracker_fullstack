const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    destination:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
}, { timestamps: true })

module.exports = mongoose.model('User',UserSchema)
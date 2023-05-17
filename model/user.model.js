const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } =  mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
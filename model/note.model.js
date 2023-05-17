const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../model/user.model');
const { Schema } = mongoose;

const noteSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title:{
        type: String,
        require: true
    },
    desc:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const NoteModel = mongoose.model('note', noteSchema);

module.exports = NoteModel;
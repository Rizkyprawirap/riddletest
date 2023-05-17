const NoteModel = require('../model/note.model');
const jwt =require('jsonwebtoken');

class NoteService {

    static async checkid(id){
        try {
            return await NoteModel.findById(id);
        } catch (error) {
            console.log(error)
        }
    }

    static async createNote(userId, title, desc){
        try {
            const createNote = new NoteModel({userId, title, desc}); 

            return await createNote.save();
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllNoteByUserId(userId){
        try {

            const getAllNoteByUserId = await NoteModel.find({userId});

            return getAllNoteByUserId;
            
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteNoteById(id){
        try {
            const deleteNoteById = await NoteModel.findByIdAndDelete(id);            
            return deleteNoteById;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateNote(id, title, desc){
        try {

            const filter = {_id: id};
            // console.log(filter)
            const update = {$set: {title: title, desc: desc}};
            // console.log(update)
            const updateNoteTitle = await NoteModel.updateOne(filter, update);            
            // console.log(updateNoteTitle)
            
            return updateNoteTitle;
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = NoteService;
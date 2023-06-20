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

    static async createNote(userToken, title, desc){
        try {
            const decode = jwt.decode(userToken, { complete: true});

            const userId = decode.payload._id;

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
            const update = {$set: {title: title, desc: desc}};
            const updateNoteTitle = await NoteModel.updateOne(filter, update);            
            
            return updateNoteTitle;

        } catch (error) {
            console.log(error);
        }
    }

    static async sortNoteByNameDesc(){
        try {

            const sortCriteria = {title: -1};

            const doc = NoteModel.find().sort(sortCriteria);

            return doc;


        } catch (error) {
            console.log(error);
        }
    }

    static async sortNoteByNameAsc(){
        try {

            const sortCriteria = {title: 1};

            const doc = NoteModel.find().sort(sortCriteria);

            return doc;


        } catch (error) {
            console.log(error);
        }
    }

    static async sortNoteByLatest(){
        try {

            const sortCriteria = {createdAt: -1};

            const doc = NoteModel.find().sort(sortCriteria);

            return doc;


        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = NoteService;
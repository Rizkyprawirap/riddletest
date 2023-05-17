const NoteService = require('../services/note.services');

exports.createNote = async (req, res) => {
    try {
        const {userId, title, desc} = req.body;
        const note = await NoteService.createNote(userId, title, desc);
        
        res.status(200).json({message: "Note has been created!", note: note});
        
    } catch (error) {
        res.status(500).json({message: "Error while create note!"});
    };
};

exports.getAllNoteByUserId = async (req, res) => {
    try {
        const { userId } = req.body;
        const noteList = await NoteService.getAllNoteByUserId(userId);

        res.status(200).json({message: "Getting all note!", note_list: noteList});

    } catch (error) {
        res.status(500).json({message: "Error while getting note!"});
        console.log(error)
    };
};

exports.deleteNoteById = async (req, res) => {
    try {
        const { id } = req.body;
        
        const isDelete = await NoteService.deleteNoteById(id);
        
        if (isDelete === null) {
            res.status(404).json({message: "Note not exist!"});
        }
        
        res.status(200).json({message: "Note succesfully deleted!"});
        
    } catch (error) {
        res.status(500).json({message: "Error while deleting note!"});
        console.log(error)
    };
};

exports.updateNote = async (req, res) => {
    try {
        const { id, title, desc} = req.body;
        
        const isUpdate = await NoteService.updateNote(id, title, desc);

        if (!isUpdate) {
            res.status(404).json({message: "Note not exist!"});
        }

        res.status(200).json({message: "Note succesfully updated!"});

    } catch (error) {
        res.status(500).json({message: "Error while updating note!"});
        console.log(error)
    };
}
;


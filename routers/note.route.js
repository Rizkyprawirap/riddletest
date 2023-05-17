const router = require('express').Router();
const NoteController =  require('../controllers/note.controller');

router.post('/create', NoteController.createNote);
router.post('/getAllUserNote', NoteController.getAllNoteByUserId);
router.post('/updateNote', NoteController.updateNote);
router.post('/deleteNoteById', NoteController.deleteNoteById);

module.exports = router;
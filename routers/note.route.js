const router = require('express').Router();
const NoteController =  require('../controllers/note.controller');

router.post('/create', NoteController.createNote);
router.post('/getAllUserNote', NoteController.getAllNoteByUserId);
router.post('/updateNote', NoteController.updateNote);
router.post('/deleteNoteById', NoteController.deleteNoteById);

router.get('/sortByNameAsc', NoteController.sortNoteByNameAsc);
router.get('/sortByNameDesc', NoteController.sortNoteByNameDesc);
router.get('/sortByLatest', NoteController.sortNoteByLatestTime);


module.exports = router;
const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const { validateUserLogin, verifyUserToken } = require('../middleware/user.middleware');

router.post('/register', UserController.register);
router.post('/login', validateUserLogin ,UserController.login);
router.post('/auth', verifyUserToken ,UserController.auth);

module.exports = router;
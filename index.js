const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const noteModel = require('./model/note.model');
require('dotenv').config(); 

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});
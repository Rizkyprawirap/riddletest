const express = require('express');
const bodyParser = require('body-parser');
const UserRoute = require('./routers/user.route');
const NoteRoute = require('./routers/note.route');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use('/', UserRoute);
app.use('/', NoteRoute);

module.exports = app;
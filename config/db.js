const mongoose = require('mongoose');
require('dotenv').config();

// Set up the connection URI
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const clusterUrl = process.env.CLUSTERURL;
const databaseName = process.env.DATABASENAME;

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;

// Set up Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to the database
const connection = mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});



module.exports = connection;
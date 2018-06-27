const mongoose = require('mongoose');

// Connection to MongoDB 
mongoose.connect('mongodb://localhost/adService');
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
})

module.exports = db;
const mongoose = require('mongoose');

// Connection to MongoDB 
mongoose.connect('mongodb://localhost/adService');
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
})
  .catch((err) => {
    console.log(err)
  })

module.exports = db;
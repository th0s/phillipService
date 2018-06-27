const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Basic Schema Design / Model Creation
const adSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  duration: Number,
  url: String,
  tag: String
});


const Ad = mongoose.model('ad', adSchema);

module.exports = Ad;
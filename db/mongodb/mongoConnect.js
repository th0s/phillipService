const mongoose = require('mongoose');
const faker = require('faker');
const Schema = mongoose.Schema;


// Connection to MongoDB 
mongoose.connect('mongodb://localhost/adService');
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
})


// Basic Schema Design / Model Creation
const adSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  duration: Number,
  url: String,
  tag: String
});


const ad = mongoose.model('ad', adSchema);


// Seed Function
const mongoInsert = () => {


  db.collection.insertMany
};
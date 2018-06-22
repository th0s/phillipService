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


const Ad = mongoose.model('ad', adSchema);


// Seed Function
const populate = (amount) => {
  let insertArray = [];

  for (let i = 0; i < amount; i++) {
    let insertObject = new Ad({
      id: faker.random.number(10000000),
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      duration: faker.random.number(500),
      url: faker.internet.url(),
      tag: faker.lorem.word()
    })
    insertArray.push(insertObject);
  }

  return insertArray;
};

const bulkInsert = (contentArr) => {
  db.insertMany(contentArr, (err, result) => {
    if (err) (console.log('There was an insertion error: ', err));
    console.log(result, '<---------- Success!')
    return
  })
};


let newArr = populate(10);
console.time('Insert 10')
console.log(bulkInsert(newArr));
console.timeEnd('Insert 10');
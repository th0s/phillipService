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
//const tags = [];

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
  bulkInsert(insertArray);
};

const bulkInsert = (contentArr) => {
  db.collection('ads').insertMany(contentArr, (err, res) => {
    if (err) {console.log(err)}
    return
  })
};

const timer = () => {
  let final = 0;
  setInterval(() => {
    if (final >= 10000000) {
      console.log('Finshed!');
      return;
    }
    populate(6000);
    final += 6000;
  }, 2000);

  
}
timer();
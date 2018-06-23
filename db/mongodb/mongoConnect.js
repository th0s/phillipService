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
    // let insertObject = new Ad({
    //   id: 1,
    //   name: 'test ',
    //   description: 'test test test test test test test test ',
    //   duration: 456,
    //   url: 'httpa://google.com',
    //   tag: 'test' 
    // })
    // insertArray.push(insertObject);
  }
  bulkInsert(insertArray);
};

const bulkInsert = (contentArr) => {
  let bulk = db.collection('ads').initializeUnorderedBulkOp();
  const final = contentArr.map(item => {bulk.insert(item)})
  bulk.execute();

};

const timer = () => {
  let final = 30;
  setInterval(() => {
    if (final >= 1000000) {
      console.log('Finshed!');
      return;
    }
    populate(1000);
    final += 2000;
  }, 2000);

  
}
timer();
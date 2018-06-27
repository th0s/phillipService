const client = require('../dbConnect');
const faker = require('faker');

const firstRun = true;

const tableConfig = () => {
  let newTable = `
    CREATE TABLE TABLE IF NOT EXISTS ad_service.ads (
      id int,
      name text,
      description text,
      duration int,
      url text,
      tag text,
      PRIMARY KEY(id, tag));
    `
  ;

  let setTag = `
    CREATE INDEX IF NOT EXISTS tag_id
    ON ad_service.ads(tag);
    `
  ;
  client.execute(newTable, (err, res) => {
    return console.log(err, res)
  })

  client.execute(setTag, (err, res) => {
    return console.log(err, res)
  })
}

const build = (count) => { 
  let insertArr = [];

  for (let i = 0; i < count; i++) {
    let fakeData = {
      id: faker.random.number(10000000),
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      duration: faker.random.number(500),
      url: faker.internet.url(),
      tag:faker.lorem.word()
    }

    let query = {
      query: `
        INSERT INTO ads (
          id,
          name,
          description,
          duration,
          url,
          tag
        ) VALUES (
          ${fakeData.id}, 
          '${fakeData.name}', 
          '${fakeData.description}',
          ${fakeData.duration}, 
          '${fakeData.url}', 
          '${fakeData.tag}'
        )`
      }
    ;    
    insertArr.push(query);
  }

  bulkInsert(insertArr);
}

const bulkInsert = (contentArr) => {
  if (tableConfig) {
    
  }
  client.batch(contentArr, (err, res) => {
    if (err) {    
      console.log("Error: --- >", err)
      return
    }
      console.log('Success!', res)
  })
}

const timer = () => {
  let final = 1500;

  setInterval(() => {
    if (final === 1000) {
      console.log('Finshed!');
      return;
    }
    
    let counter = 2;
    for (let i = 0; i < counter; i++) {
      build(50);
    }
    final += 6000;
  }, 2000);

  
}
timer();

module.exports = {
 timer
};    
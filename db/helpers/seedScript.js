const client = require('../dbConnect');
const faker = require('faker');


const seed = (count) => { 

  for (let i = 0; i < count; i++) {
    let id = faker.random.number(10000000)
    let name = faker.lorem.words()
    let description = faker.lorem.sentence()
    let duration = faker.random.number(500)
    let url = faker.internet.url()
    let tag = faker.lorem.word()

    let insert = `
    INSERT INTO ads (id, name, description, duration, url, tag) 
    VALUES (
      ${id}, 
      '${name}', 
      '${description}',
      ${duration}, 
      '${url}', 
      '${tag}'
    )`;
    
    console.time('Real Insert Time is : ');
    client.execute(insert, (err, result) => {
      if (err) { 
        console.log('There was an insertion err: ', err)
        return
      }
    })
    console.timeEnd('Real Insert Time is : ');
  }
  console.log(count)  
  return
}

const timer = () => {
  let final = 60340;

  setInterval(() => {
    if (final === 10000000) {
      console.log('Finshed!');
      return;
    }
    
    let counter = 2;
    for (let i = 0; i < counter; i++) {
      seed(1000);
    }
    final += 2000;
  }, 2000);

  
}
timer();

module.exports = {
 seed
};    
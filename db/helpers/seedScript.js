const client = require('../dbConnect');
const faker = require('faker');


const seed = () => {
  let id = faker.random.number(10000000)
  let name = faker.lorem.words()
  let description = faker.lorem.sentence()
  let duration = faker.random.number(500)
  let url = faker.internet.url()
  let tag = faker.lorem.word()

  let insert = `
    INSERT INTO ads (
      id, name, description, duration, url, tags
    ) 
    VALUES (
      ${id},
      ${name},
      ${description},
      ${duration},
      ${url},
      ${tag}
    )
  `
  client.execute(insert, (err, result) => {
    if (err) { 
      console.log('There was an insertion err: ', err)
      return
    }
    console.log(result, '<------ is result')
  })
  
}
console.log(seed())

module.exports = {
 seed
};
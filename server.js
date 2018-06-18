// Library / Helper Imports
const express = require('express');
const bodyParser = require('body-parser');
const fakerTest = require('./db/helpers/seedScript');

// Cassandra Import
const client = require('./db/dbConnect');

const app = express();

app.listen(1337, () => {console.log('Listening on port 1337')});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM test where email = ? ALLOW FILTERING' ;
  client.execute(query, ['test@gmail.com'], (err, result) => {
    if (err) {res.status(404).send({message: err})}
    res.send(result.rows);
  })
})
 
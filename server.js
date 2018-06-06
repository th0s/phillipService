const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(1337, () => { console.log('Listening on port 1337') });

app.get('/', (req, res) => {
  res.send('Hello World!');
});



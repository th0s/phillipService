// Library / Helper Imports
const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./db/helpers')

// Mongo Connection
const client = require('./db/dbConnect');

const app = express();

app.listen(1337, () => { console.log('Listening on port 1337') });

app.get('/users', (req, res) => {

})

// Create endpoint '/ads
app.get('/ads', (req, res) => {
  res.sendStatus(200)
  // helpers.requestHelpers.getUserProfile(req.query.userId, (err, res) => {
  //   if (err) { res.send(err) }
  //   res.end(res)
  // })
})

// Exporting app for testing purposes
module.exports = app;
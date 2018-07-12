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
  helpers.requestHelpers.runSystem(req.query.userId, req.query.tags, (err, result) => {
    if (err) { res.send(err) }
    res.send(result)
  })
})

// Exporting app for testing purposes.
module.exports = app;
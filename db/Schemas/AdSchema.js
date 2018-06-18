const client = require('../dbConnect');
const cassandra = require('cassie-odm');

const AdSchema = new cassandra.Schema({
  id: Number,
  name: String,
  description: String,
  duration: Number,
  url: String,
  tags: {type: Array, primary: true}
})

const Ad = cassandra.model('Ad', AdSchema);

module.exports = Ad;
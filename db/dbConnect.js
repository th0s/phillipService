const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'holder'});

client.connect((err, result) => {
  if (err) { console.log('There was an error: ', err)}
  console.log('Connected to Cassandra')
})

module.exports = client;
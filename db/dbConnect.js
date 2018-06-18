const cassie = require('cassie-odm');

const config = {keyspace: 'ad_service', hosts: ['127.0.0.1']}
cassie.connect(config, (err, result) => {
  if (err) { console.log('There was an error: ', err)}
  console.log(err)
});

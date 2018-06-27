const db = require('../dbConnect');
const Ad = require('../Schemas/adSchema');

const findAd = (tag, cb) => {
  console.time('getAd')
  db.collection('ads').findOne({tag: tag}, (err, result) => {
    if (err) {
      cb(err, null)
    }
    console.timeEnd('getAd');
    cb(null, result);
  })
}

findAd('aut', (err, result) => {
  if (err) { console.log(err)}
  console.log(result);

})


module.exports = {
  findAd
}
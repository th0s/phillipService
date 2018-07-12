const db = require('../dbConnect');
const Ad = require('../Schemas/adSchema');


const findAd = (tag, cb) => {
  let collection = db.collection('ads');
  console.time('getAd')
  collection.aggregate(
    [
      {
        $match: { tag: 'aut' }
      }, {
        $limit: 10
      }
    ]).toArray((err, result) => {
      console.timeEnd('getAd')
      if (err) { cb(err, null) }
      cb(null, result)
    })
}

module.exports = {
  findAd
}
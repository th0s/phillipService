// Libraries
const axios = require('axios');

// Files
const dbHelper = require('../helpers/dbHelpers');

// Request User Profile from User Service
const getUserProfile = (userId, tag, cb) => {

  const userProfile = {
    username: 'test',
    subscriptions: [],
    tags: ['aut'],
    country: 'USA',
    state: 'OR',
    city: 'Troutdale',
    dob: 3172018,
    email: 'test@yahoo.com'
  };

  const newTags = ['aut'];

  cb(null, userProfile, newTags)

  // axios.get('http://userservice/user/:userId', {
  //   userId: userId,
  //   tag: tag
  // })
  // .then((err, res) => {
  //   if (err) {
  //     console.log('There was a userService error: ', err);
  //     cb(err, null)
  //   }
  //   cb(null, res)
  // })
};

const compileTags = (userProfile, newTags, cb) => {

  let randUnder10 = Math.floor(Math.random() * 10)
  let userTagsArr = userProfile.tags;
  let tagCompare = newTags[Math.floor(Math.random() * newTags.length)];

  // If the userTagsArr has any of the tags from the newly queued video tags
  // Pull ad with that tag.
  if (userTagsArr.includes(tagCompare)) {
    let pullTag = tagCompare;
    let newAd = dbHelper.findAd(pullTag, (err, result) => {
      if (err) (cb(err, null));

      cb(null, result[randUnder10]);
    })

  } else {
    // If it doesn't contain that tag, chose random tag to pull with from currenly queued video tag list.
    let newAd = dbHelper.findAd(userTagsArr[Math.floor(Math.random() * userTagsArr.length)], (err, result) => {

      if (err) {
        cb(err, null)
      }
      cb(null, result[randUnder10])
    })
  }
};

const runSystem = (userId, tag, cb) => {
  getUserProfile(userId, tag, (err, result, tags) => {

    if (err) {
      console.log('There was an error getting User Profile.')
      cb(err, null)
    }

    compileTags(result, tags, (err, result) => {
      if (err) { cb(err, null) }
      console.log(result)
      cb(null, result)
    })

  })

}

// const userProfile = {
//   username: 'test',
//   subscriptions: [],
//   tags: ['trending', 'gaming'],
//   country: 'USA',
//   state: 'OR',
//   city: 'Troutdale',
//   dob: 3172018,
//   email: 'test@yahoo.com'
// };

// const newTags = ['insurance', 'gaming'];

// compileTags(userProfile, newTags);

module.exports = {
  runSystem
}
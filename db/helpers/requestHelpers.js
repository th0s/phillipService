const axios = require('axios'); 

// Request User Profile from User Service
const getUserProfile = (userId, cb) => {
  console.log(userId)
  axios.get('http://userservice/user/:userId', {
    userId: userId
  })
  .then((err, res) => {
    if (err) { 
      console.log('There was a userService error: ', err);
      cb(err, null)
    }
    cb(null, res)
  })
};

module.exports = {
  getUserProfile
}
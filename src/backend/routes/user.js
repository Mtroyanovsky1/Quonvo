const express = require('express');
const models = require('../models');

const User = models.User;
const router = express.Router();

// const limit = 10;

router.get('/rankings/get', (req, res) => {
  const topic = req.query.topic;
  User.find({
    // rating['topic']: { $gt: 0 }
  })
  // .sort({ rating['topic']: -1})
  // .limit(limit)
  .then((users) => {
    const rankings = users.map((user) => {
      const hi = {
        name: user.name,
        rating: user.rating[topic]
      };
      return hi;
    });
    const sortedUsers = rankings.sort((a, b) => b.rating - a.rating);
    return sortedUsers;
  })
  .then((rankings) => {
    res.json({
      success: true,
      rankings
    });
  })
.catch(err => res.send(err));
});
// Routes go here

router.get('/user/get', (req, res) => {
  const user = req.user;
  res.json({
    success: true,
    user
  });
});

module.exports = router;

const express = require('express');
const models = require('../models');
const User = models.User;
const router = express.Router();

const limit = 10;

router.get('/rankings/get', (req, res) => {
  const topic = req.query.topic;
  User.find({
    // rating['topic']: { $gt: 0 }
  })
  .sort({ rating.topic: -1})
  .limit(limit)
  .then((rankings) => {
    res.json({
      success: true,
      rankings
    })
  })
})
// Routes go here

module.exports = router;

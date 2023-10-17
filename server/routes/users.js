const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      username: 'Andrew',
      age: 30
    },
    {
      username: 'Caroline',
      age: 27 
    }
  ])
});


module.exports = router;

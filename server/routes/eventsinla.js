const express = require('express');
const router = express.Router();
// const testURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&keyword=travis%20scott&apikey=yMAGvFgh9lrMQAUJbaWyLpPDF9ctEUAb`;
const models = require('../eventsModel')

router.get('/', (req, res, next) => {
  models.Event.find()
    .then(data => {
      console.log(data)
      res.json(data)
      // res.locals.eventsInLA = data._embedded;
      // return next();
    })
    .catch(err => console.error(err))
})

module.exports = router;
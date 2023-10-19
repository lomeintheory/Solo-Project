const models = require('../eventsModel.js')

const apiController = {};

apiController.getEvents = (req, res) => {
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&size=200&apikey=yMAGvFgh9lrMQAUJbaWyLpPDF9ctEUAb`)
    .then(response => response.json())
    .then(data => {
      console.log(data._embedded.events)
      // for (const eventName in data._embedded.events) {
      //   const event = new Event(eventName);
      //   event.save();
      // }
      console.log('Events: ', data._embedded.events);
      models.Event.insertMany(data._embedded.events)
      res.send(data._embedded.events)
    })
}

// apiController.addEvent = (req, res) => {
//   Event.find({})
//     .then(data => {
//       console.log(data)
//       res.send(data)
//     })
// }


module.exports = apiController;
const express = require('express');
const path = require('path');
const app = express();
const API = require('./controllers/apicontroller')
const models = require('./eventsModel')
// const users = require('./routes/users');
const eventsInLARouter = require('./routes/eventsinla');
require('dotenv').config();
const secret_key = process.env.APIKEY

// if (api_key !== secret_key) {
//   return res.status(403).send({
//     message: `Your API key was incorrect: ${api_key}`
//   })
// };
app.use(express.json());
// app.use('/api/users', users);

app.use('/api/eventsinla', eventsInLARouter)

app.get('/api', API.getEvents)

app.post('/api/favorites', API.addEvent)

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Some global error',
    status: 500,
    message: {err: 'Oh no global error'}
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})

// app.get('/results', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/src/results.html'))
// })

app.listen(1234);






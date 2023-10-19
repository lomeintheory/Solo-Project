const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://lomeintheory:iuglmYscSmsjqekj@cluster0.wubj2p7.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'music_events'
})

const eventSchema = new Schema({
  name: String,
  type: String,
  id: String,
  test: Boolean,
  url: String,
  locale: String,
  images: Array,
  sales: Object,
  dates: Object,
  classifications: Array,
  promoter: Object,
  promoters: Array,
  priceRanges: Array,
  seatmap: Object,
  accessibility: Object,
  ticketLimit: Object,
  ageRestrictions: Object,
  doorsTimes: Object,
  ticketing: Object,
  _links: Object,
  _embedded: Object
})

const favoriteSchema = new Schema({
  name: String,
})

const Favorite = mongoose.model('favorite', favoriteSchema)
const Event = mongoose.model('event', eventSchema)

module.exports = {
  Event, 
  Favorite
}

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const concertSchema = new Schema({
  artist: {
    type: String,
  },
  date: {
    type: String,
  },
  arrival: {
    type: String,
  },
  city: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  detailText: {
    type: String,
  },
});

const Concert = mongoose.model("Concert", concertSchema);

module.exports = Concert;

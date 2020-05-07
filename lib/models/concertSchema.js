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

// const { ObjectID } = require("mongodb");
// const { getCollection } = require("../database");

// const collectionName = "concerts";

// async function postConcert(concert) {
//   const concertsCollection = await getCollection(collectionName);
//   const result = await concertsCollection.insertOne({ ...concert });

//   return result.insertedId;
// }

// async function getConcert(concertId) {
//   const concertsCollection = await getCollection(collectionName);
//   const objectId = new ObjectID.createFromHexString(concertId);
//   const concert = await concertsCollection.findOne({ _id: objectId });

//   if (!concert) {
//     throw new Error("Oh snap! Cannot find concert 😞");
//   }

//   return concert;
// }

// async function getConcerts() {
//   const concertsCollection = await getCollection(collectionName);
//   const concerts = await concertsCollection.find().sort({ _id: -1 }).toArray();

//   if (!concerts) {
//     throw new Error("Oh snap! Cannot find concerts 😞");
//   }

//   return concerts;
// }

// async function updateConcert(concertId, fields) {
//   const concertsCollection = await getCollection(collectionName);
//   const updateResult = await concertsCollection.updateOne(
//     {
//       _id: ObjectID(concertId),
//     },
//     { $set: fields }
//   );

//   if (updateResult.matchedCount === 0) {
//     throw new Error("Oh snap! Cannot find concert 😞");
//   }

//   return updateResult;
// }

// exports.postConcert = postConcert;
// exports.getConcerts = getConcerts;
// exports.getConcert = getConcert;
// exports.updateConcert = updateConcert;

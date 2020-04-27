const { ObjectID } = require("mongodb");
const { getCollection } = require("../database");

const collectionName = "concerts";

async function postConcert(concert) {
  const concertsCollection = await getCollection(collectionName);
  const result = await concertsCollection.insertOne({ ...concert });

  return result.insertedId;
}

async function getConcert(concertId) {
  const concertsCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(concertId);
  const concert = await concertsCollection.findOne({ _id: objectId });

  if (!concert) {
    throw new Error("Cannot find concerts");
  }

  return concert;
}


async function getConcerts() {
  const concertsCollection = await getCollection(collectionName);
  const concerts = await concertsCollection.find().sort({ _id: -1 }).toArray();

  if (!concerts) {
    throw new Error("Cannot find concerts");
  }

  return concerts;
}

exports.postConcert = postConcert;
exports.getConcerts = getConcerts;
exports.getConcert = getConcert;

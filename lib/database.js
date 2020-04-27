const { MongoClient } = require("mongodb");
let client = null;
let db = null;

async function initDatabase(url, dbName) {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
}

async function closeDatabase() {
  await client.close();
}

async function getCollection(collectionName) {
  try {
    if (!db) {
      await initDatabase();
    }
    return db.collection(collectionName);
  } catch (error) {
    throw new Error(`You have to initialize the database first: ${error.message}`);
  }
}

exports.initDatabase = initDatabase;
exports.closeDatabase = closeDatabase;
exports.getCollection = getCollection;

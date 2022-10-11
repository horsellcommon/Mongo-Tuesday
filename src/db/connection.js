require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  try {
    // client gives us access to the mongoDB methods
    await client.connect();

    //db name, creaes indiv collection
    const db = client.db("Films");

    //grabs collection to perform CRUD ops
    return db.collection("Film");
  } catch (error) {
    console.log(error);
  }
};

//returning two different items so we use object syntax
module.exports = { client, connection };
// we export the client and connection so we can have access to our client and connection outside
// of this file

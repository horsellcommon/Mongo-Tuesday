const yargs = require("yargs");
// requiring client/connection from connection file
const { client, connection } = require("./db/connection.js");
const Film = require("./utils")

const app = async (yargsObject) => {
  const collection = await connection();

  try {
    if (yargsObject.create) {
      //CREATE
      const film = new Film(yargsObject.title, yargsObject.actor)
      await film.create(collection)
      console.log("Added to collection")
    } else if (yargsObject.read) {
      //READ
    } else {
      console.log("Incorrect command");
    }
    await client.close();
  } catch (error) {
    console.log(error);
    await client.close(); //close connection
  }
};

app(yargs.argv);

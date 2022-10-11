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
      console.log(await film.read(collection))
    } else if (yargsObject.read) {
      //READ
      const film = new Film(yargsObject.title, yargsObject.actor)
      console.table(await film.read(collection))
    } else if (yargsObject.update) {
      //UPDATE
      const film = new Film(yargsObject.title, yargsObject.actor)
      console.log(await film.update(collection))
      console.table(await film.read(collection))
    } else if (yargsObject.delete) {
      //DELETE
      const film = new Film(yargsObject.title, yargsObject.actor)
      console.log(await film.delete(collection))
      console.table(await film.read(collection))
    } else if (yargsObject.createMore) {
      //Add multiple
      const film = new Film(yargsObject.title, yargsObject.actor)
      await film.createMore(collection)
      console.log(await film.read(collection))
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

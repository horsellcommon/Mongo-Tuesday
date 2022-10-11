const { ObjectId } = require("mongodb");

class Film {
  constructor(title, actor = "Unspecified") {
    this.title = title;
    this.actor = actor;
  }

  //Write our CRUD operations

  //CREATE
  async create(collection) {
    await collection.insertOne(this);
  }

  //READ
  async read(collection) {
    return await collection.find({}).toArray();
  }

  //UPDATE
  async update(collection, key, filter) {
    await collection.updateOne(
      {
        [key]: filter,
      },
      {
        $set: (this)
      }
    );
  }

  //DELETE
  async delete(collection) {
    return await collection.deleteOne({});
  }

  //Extra
  //Insert many
  async createMore(collection) {
    await collection.insertMany([this]);
  }
}

module.exports = Film;

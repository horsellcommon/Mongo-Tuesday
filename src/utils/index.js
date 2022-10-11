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
}

module.exports = Film;

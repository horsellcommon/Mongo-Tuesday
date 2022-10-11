const yargs = require("yargs")
// requiring client/connection from connection file
const {client, connection} = require("./db/connection.js")

const app = async (yargsObject) => {
    const collection = await connection()

    try{
        if (yargsObject.create) {
            //Add

        } else if (yargsObject.read) {
            //Read

        } else {
            console.log("Incorrect command")
        }
        await client.close()
    } catch (error) {
        console.log(error)
        await client.close() //close connection
    }
}

app(yargs.argv)
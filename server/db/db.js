const {MongoClient} = require('mongodb')


const client = new MongoClient('mongodb+srv://ZestyNate:Hydroflask1@discordcloneatlas.todxidu.mongodb.net/?retryWrites=true&w=majority')

async function start(){
  await client.connect()
  console.log("Connected")
  module.exports = client.db()
  const app = require('./app')
  app.listen(3000)
}

start()
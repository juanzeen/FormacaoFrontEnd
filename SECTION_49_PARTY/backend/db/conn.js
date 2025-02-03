//mongoose é o ORM do mongoDB
const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect("mongodb+srv://jziignerdev:98C8ogpe1jBKMvi0@partytime.levou.mongodb.net/?retryWrites=true&w=majority&appName=PartyTime")

    console.log("Conectado ao banco!");

  } catch (error) {
    console.log(error);

  }
}

module.exports = main

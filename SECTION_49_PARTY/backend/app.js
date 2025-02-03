//express é o que nos possibilita fazer APIs em node
const express = require("express")
//cors é um middleware que permite reqs de diferentes origens
const cors = require("cors")
const app = express()

//configura a API para aplicar o cors
app.use(cors())

//configura a API para interpretar reqs no formato JSON
app.use(express.json())

//db connection

const conn = require("./db/conn")

conn()

const routes = require("./routes/router")

//configuramos nosso servidor para usar as rotas definidas no router no escopo api
app.use("/api", routes)

app.listen(3000, function () {
  console.log("Server Online");
})

const mongoose = require("mongoose")

const { Schema } = mongoose


//schema é a entidade que será aplicada no nosso banco
//configuramos um objeto para especificar o tipo e configs adicionais
const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Service = mongoose.model("Service", serviceSchema)

//exportamos o model e o schema, mas é mais comum somente o model
//nesse caso exportamos o schema pois vamos usar no outro model
module.exports = { Service, serviceSchema}

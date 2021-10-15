const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const vacunationSchema = new Schema({
 name: String,
 description: {Type: String, default:''},
 expiration: String

},{
  timestamps: true
})

const Vacunation = mongoose.model('vacunation', vacunationSchema)
module.exports = Vacunation

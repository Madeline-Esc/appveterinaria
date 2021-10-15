const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  Id: String,
  price: {type: Number, default: ''},
  description: String
},{
  timestamps: true
})

const Item = mongoose.model('item', itemSchema)
module.exports = Item

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  price: {type: Number},
  stock: {type: Number},
  description: String
},{
  timestamps: true
})

const Item = mongoose.model('item', itemSchema)
module.exports = Item

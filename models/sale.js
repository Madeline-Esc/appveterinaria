const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
  name: String,
  price: {type: Number},
  description: String,
  status: String
},{
  timestamps: true
})

const Sale = mongoose.model('Sale', saleSchema)
module.exports = Sale

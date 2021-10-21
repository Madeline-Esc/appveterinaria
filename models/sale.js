const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
  price: {type: Number},
  description: String,
},{
  timestamps: true
})

const Sale = mongoose.model('Sale', saleSchema)
module.exports = Sale

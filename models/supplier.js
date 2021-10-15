const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const supplierSchema = new Schema({
  name: String,
  company: { type: String, default: ''},
  phone: { type: String, default: ''},

},{
  timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)
module.exports = Supplier

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
 nameservice: String,
 duration: {type: String, default: '' },
 price: {type: Number}
},{
  timestamps: true
})

const Service = mongoose.model('services', serviceSchema)
module.exports = Service

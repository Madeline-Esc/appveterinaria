const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const servicesSchema = new Schema({
 nameservice: String,
 duration: {type: String, default: '' },
 price: {type: Number},
alctualVacunation: [{type: Schema.Types.ObjectId, ref: 'vacunation'}]
},{
  timestamps: true
})

const Service = mongoose.model('services', servicesSchema)
module.exports = Service

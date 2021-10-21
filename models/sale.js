const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const salesSchema = new Schema({
  price: {type: Number},
  description: String,
  actualUser: [{type: Schema.Types.UserId, ref:'user'}]
},{
  timestamps: true
})

const Sale = mongoose.model('item', salesSchema)
module.exports = Sale

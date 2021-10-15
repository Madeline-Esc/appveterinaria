const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  lastName: { type: String, default: ''},
  phone: { type: String, default: ''},
  email: { required: true, type: String, lowercase: true, trim: true, unique: true }
},{
  timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User

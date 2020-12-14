//Users Schema 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
  email: String,
  password: String,
  salt: String,
  role: { type: String, default: 'student' } //student, professor,..
}))
 
module.exports = Users

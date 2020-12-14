//Students Schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Students = mongoose.model('Student', new Schema({
  name: String,
  email: String,
  password: String,
  salt: String,
  role: { type: String, default: 'user' } //student, professor,..
}));

module.exports = Students;

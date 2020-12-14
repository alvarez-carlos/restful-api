//Subjects Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subjects = mongoose.model('Subject', new Schema({
  code: String,
  desc: String,
}))

module.exports = Subjects

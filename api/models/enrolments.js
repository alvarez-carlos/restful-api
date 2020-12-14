//Enrolments Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Enrolments = mongoose.model('Enrolment', new Schema({
  subject_id: {type: Schema.Types.ObjectId, ref:'Subject'},
  user_id:String,
}))

module.exports = Enrolments

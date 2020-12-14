//Subjetcs Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subjects = mongoose.model('Subject', new Schema({
  codigo: String,
  desc: String,
}));

module.exports = Subjects;

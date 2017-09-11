const mongoose = require('mongoose');
const { Schema } = mongoose;

const nameSchema = new Schema({
  name: String,
  dateOfEntry: { type: Date, default: Date.now }
});

const Name = mongoose.model('name', nameSchema);
module.exports = Name;

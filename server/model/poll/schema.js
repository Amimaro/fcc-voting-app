const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  _creator: {
    type: Number,
    ref: 'User'
  },
  name: String,
  options: [],
  votes: [],
  created_at: Date,
});


module.exports = mongoose.model('Poll', pollSchema);

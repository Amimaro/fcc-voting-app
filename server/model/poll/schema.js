const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  options: [],
  count: [],
  votes: [],
  created_at: Date,
});

module.exports = mongoose.model('Poll', pollSchema);

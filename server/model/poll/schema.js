const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  options: [],
  votes: [],
  created_at: Date,
});

pollSchema.methods.toObjectId = function(id) {
  return new mongoose.Types.ObjectId(id);
};

module.exports = mongoose.model('Poll', pollSchema);

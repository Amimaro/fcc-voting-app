const Facade = require('../../lib/facade');
const pollSchema = require('./schema');
const dateTime = require('node-datetime');

class PollFacade extends Facade {

  create(body) {
    let dt = dateTime.create();
    let formatted = dt.format('Y-m-d H:M:S');
    body.created_at = formatted;

    const model = new this.model(body);
    return model.save();
  }

  find(...args) {
    return this.model
      .find(...args)
      .populate('_creator', 'twitter.username')
      .exec();
  }

  findById(...args) {
    return this.model
      .findById(...args)
      .populate('_creator', 'twitter.username')
      .exec();
  }

}

module.exports = new PollFacade(pollSchema);

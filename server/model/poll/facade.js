const Facade = require('../../lib/facade');
const pollSchema = require('./schema');
const dateTime = require('node-datetime');

class PollFacade extends Facade {

  create(body) {

    let dt = dateTime.create();
    let formatted = dt.format('Y-m-d H:M:S');
    body.created_at = formatted;

    body.votes = [];
    for(let option of body.options)
      body.votes.push(0);

    const model = new this.model(body);
    return model.save();
  }

}

module.exports = new PollFacade(pollSchema);

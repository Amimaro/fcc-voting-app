const Facade = require('../../lib/facade');
const voteSchema = require('./schema');

class VoteFacade extends Facade {}

module.exports = new VoteFacade(voteSchema);

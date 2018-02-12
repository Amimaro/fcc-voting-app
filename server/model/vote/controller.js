const Controller = require('../../lib/controller');
const voteFacade = require('./facade');

class VoteController extends Controller {}

module.exports = new VoteController(voteFacade);

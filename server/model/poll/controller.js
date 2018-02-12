const Controller = require('../../lib/controller');
const pollFacade = require('./facade');

class PollController extends Controller {

  create(req, res, next) {
    if (req.isAuthenticated()) {
      req.body._creator = req.user._id;
      this.facade.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(err => next(err));
    } else {
      res.redirect('/');
    }
  }

  vote(req, res, next) {
    let votes = {
      option: req.body.option,
      addr: req.connection.remoteAddress
    }
    if (req.isAuthenticated())
      votes.user = req.user._id
    this.facade.update({
        _id: req.body._id,
        'votes.addr': {
          $not: {
            $exists: '::ffff:127.0.0.1'
          }
        }
      }, {
        $push: {
          votes: votes
        }
      })
      .then((results) => {
        if (results.nModified < 1 || results.n < 1) {
          return res.sendStatus(304);
        }
        res.sendStatus(204);
      })
      .catch(err => next(err));
  }

}

module.exports = new PollController(pollFacade);

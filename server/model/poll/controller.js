const Controller = require('../../lib/controller');
const pollFacade = require('./facade');

class PollController extends Controller {

  create(req, res, next) {
    if (req.isAuthenticated()) {
      req.body._creator = req.user.github._id;
      this.facade.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(err => next(err));
    } else {
      res.redirect('/');
    }
  }

}

module.exports = new PollController(pollFacade);

const path = require('path');
const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const poll = require('./model/poll/router');

router.use('/api/user', user);
router.use('/api/poll', poll);

router.get('*', function(req, res) {
  res.sendfile(path.resolve('client/dist/index.html'));
});

module.exports = router;

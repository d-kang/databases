var models = require('../models');

const store = [];

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('req.body', req.body);
      res.send(store);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req.body', req.body);
      store.push(req.body);
      res.json(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

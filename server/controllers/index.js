var models = require('../models');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          throw err;
        }
        res.json(results);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post()
      // get the body object from the post
      console.log('Here is the post from messages: ', req);
      res.sendStatus(201);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

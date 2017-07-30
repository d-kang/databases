var models = require('../models');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        console.log(`'Controllers GET Line 8'`, new Date().toLocaleString());
        if (err) {
          throw err;
        }
        console.log(`'Controllers Line 12'`, {results});
        res.json(results);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(`'Controllers POST Line 18'`, new Date().toLocaleString());
      var params = [req.body.message, req.body.username, req.body.roomname];
      // models.messages.post()
      // get the body object from the post
      console.log('Here is the post from messages: ', req);
      models.messages.post(params, function(err, results) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

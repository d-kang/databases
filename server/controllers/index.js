var models = require('../models');
var express = require('express');
var app = express();
module.exports = {
  users: {
    get: function (req, res) {
      console.log(`'Controllers POST Line 35'`, new Date().toLocaleString());
      models.users.get(function(err, results) {
        console.log('Controller 37');
        if (err) {
          throw err;
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log(`'Controllers POST Line 46'`, new Date().toLocaleString());
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        console.log('Controller 48');
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    }
  },
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
      var params = [req.body.text, req.body.username, req.body.roomname];
      // models.messages.post()
      // get the body object from the post
      // models.users.post(params, function(err, results) {
      //   if (err) {
      //     throw err;
      //   }
      // })

      module.exports.users.post(req, res);
      models.messages.post(params, function(err, results) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  }
};

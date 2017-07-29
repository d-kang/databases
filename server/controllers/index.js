var models = require('../models');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      // write sql code here
      res.status(200).send('hi');
      // res.status(200).send('hi')

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

var express = require('express');
var db = require('./db');
var cors = require('cors');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
app.use(cors());
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// const store = [];
//
// app.post('/testing123', (req, res) => {
//   console.log('req.body', req.body);
//   store.push(req.body);
//   res.json(req.body);
// });
// app.get('/testing123', (req, res) => {
//   console.log('req.body', req.body);
//   res.send(store);
// });
// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

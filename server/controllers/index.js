var models = require('../models');
var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then(result => res.send(result));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const { text, username, roomname } = req.body;
      console.log('text', text, 'username', username, 'roomname', roomname);

      const query = `insert into messages
       (user_id, text, roomname)
       values (1, '${text}', '${roomname}');`;

      models.messages.post(query)
        .then(data => {
          console.log('data POST from DB', data);
          res.json(data);
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      var query = `insert into users
       (username)
       values ('david');`
      dbConnection.query(query, (err, results, fields) => {
        if (err) {
          console.log('err', err);
        } else {
          res.send(results);
        }
      })
    }
  }
};








/*
show tables;
select * from messages;

insert into messages
 (userID, text, roomname)
 values (5, 'hello', 'lobby');

*/

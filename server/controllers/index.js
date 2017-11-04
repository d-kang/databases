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
      const {username} = req.body;
      var query = `insert into users
       (username)
       values ('${username}');`

       // check if user exists
          // if user doesnt exist add user
          // if user does exist then do nothing but still have to send something back to client
      const q2 = `select * from users where username='d';`
      dbConnection.query(q2, (err, results, fields) => {
        if (err) {
          console.log('err', err);
        } else {
          var isFound = results.length > 0;

          if (isFound) {
            res.send('already in db');
          } else {
            dbConnection.query(query, (err, results, fields) => {
              if (err) {
                console.log('err', err);
              } else {
                res.send('user was added', results);
              }
            });
          }

        }
      });

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

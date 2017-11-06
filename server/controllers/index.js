var models = require('../models');
var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then(result => res.send(result))
        .catch(err => console.error(err));

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
      // get username and use whereever you need to get user
      // can use to see if user exists and get id number
      const { username } = req.body;
      const q2 = `select * from users where username='${username}';`
      dbConnection.query(q2, (err, results, fields) => {
        if (err) {
          console.log('errrrrrrrrrrrrrrrrr', err);
        } else {
          var isFound = results.length > 0;
          if (isFound) {
            res.send(results)
          } else {
            return null;
          }

        }
      });
    },
    post: function (req, res) {
      const {username} = req.body;
      const q1 = `select * from users where username='${username}';`
      var q2= `insert into users
        (username)
        values ('${username}');`

      dbConnection.query(q1, (err, results, fields) => {
          console.log('/////////////////////////////////////////1')
        if (err) {
          console.log('err', err);
        } else {
          var isFound = results.length > 0;

          if (isFound) {
            res.send(results);
          } else {
            console.log('/////////////////////////////////////////2')
            dbConnection.query(q2, (err, results, fields) => {
              if (err) {
                console.log('err', err);
              } else {
                res.send(results);
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

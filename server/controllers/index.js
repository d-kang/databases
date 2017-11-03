var models = require('../models');
var dbConnection = require('../db')

module.exports = {
  messages: {
    get: function (req, res) {
      dbConnection.query(`SELECT * FROM messages;`, (err, results, fields) => {
        if (err) throw err;
        console.log('results', results);
        res.send(results);
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const { text, username, roomname } = req.body;
      console.log('text', text, 'username', username, 'roomname', roomname);

      const query = `insert into messages
       (userID, text, roomname)
       values (1, '${text}', '${roomname}');`;

       console.log('query', query)
      dbConnection.query(query, (err, results, fields) => {
        if (err) throw err;
        console.log('results', results);
        return results;
      })
        .then(data => {
          console.log('data POST from DB', data);
          res.json(data)
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};








/*
show tables;
select * from messages;

insert into messages
 (userID, text, roomname)
 values (5, 'hello', 'lobby');

*/

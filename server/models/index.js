var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      console.log(`'Models GET Line 7'`, new Date().toLocaleString());
      // fetch all messages
      // text, username, roomname, id
      var queryStr =
      'select messages.id, messages.text, messages.roomname, users.username \
       from messages left outer join users on (messages.userid = users.id) \
       order by messages.id desc';
      db.query(queryStr, function(err, results) {
        console.log('Models 15', {results});
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log(`'Models POST Line 20'`, new Date().toLocaleString());
      console.log('Models 21', {params});
      // create a message for a user id based on the given username
      // params ===> [req.body.text, req.body.username, req.body.roomname]
      // messages table columns ===> id, userid, text, roomname
      // users table columns ===> id, username
      // alter table users add constraint unique (username);
      // var queryStr =
      // 'insert into users (username) \
      //  value (?) \
      //  insert into messages(userid, text, roomname) \
      //  value ((select id from users where username = ? limit 1), ?, ?)';

      // var queryStr =
      // `insert into users(username)
      //  value ("${params[1]}")`;

      var queryStr = `insert into messages (userid, text, roomname)
       value ((select id from users where username = "${params[1]}"), "${params[0]}", "${params[2]}")`;

      db.query(queryStr, params, function(err, results) {
        console.log('Models 24');
        callback(err, results);
      });
    }
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

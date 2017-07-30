var db = require('../db');

module.exports = {
  users: {
    get: function (callback) {
      // fetch all users
      console.log(`'Models POST Line 57'`, new Date().toLocaleString());
      var queryStr = 'select * from users';

      db.query(queryStr, function(err, results) {
        console.log('Modedls 61');
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log(`'Models POST Line 67'`, new Date().toLocaleString());
      // create a user
      var queryStr = `
        insert into users(username)
          values (${params[0]})
        `;
      db.query(queryStr, params, function(err, results) {
        console.log('Models 71');
        callback(err, results);
      });
    }
  },
  messages: {
    get: function (callback) {
      console.log(`'Models GET Line 7'`, new Date().toLocaleString());
      // fetch all messages
      // text, username, roomname, id
      var queryStr = `
        select messages.id, messages.text, messages.roomname, users.username \
       from messages left outer join users on (messages.userid = users.id) \
       order by messages.id desc
      `;
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

      // var queryStr1 = `
      //   insert into users(username)
      //   value ("${params[1]}")
      // `;

      var queryStr = `
        insert into messages (userid, text, roomname)
        value ((select id from users where username = "${params[1]}"), "${params[0]}", "${params[2]}")
      `;

      // var queryStr3 = `
      //   insert into users(username)
      //     value ("${params[1]}");
      //   insert into messages (userid, text, roomname)
      //     value ((select id from users where username = "${params[1]}"), "${params[0]}", "${params[2]}");
      // `;

      // add username to users (only if that username hasn't been added)
      // db.query(queryStr1, params, function(err, results) {
      //   console.log('Models 24');
      //   callback(err, results);
      // });

      // add text, roomname and foreign key userid
      db.query(queryStr, params, function(err, results) {
        console.log('Models 24');
        callback(err, results);
      });
    }
  }

};

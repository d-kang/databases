var db = require('../db');
// +----------------+
// | Tables_in_chat |
// +----------------+
// | message_table  |
// | roomname_table |
// | user_table     |
// +----------------+
module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'select * from user_table';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });

      //use query mysql API use query to get messages.
      //query method will take query string as its first argument and error first call back as second argument.

      //Inside of the error first call back invoke callback with query string.


    }, // a function which produces all the messages
    post: function () {
      //use uqery mysql API to create messages.

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

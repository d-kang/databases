var dbConnection = require('../db');

module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve, reject) => {

        dbConnection.query(`SELECT * FROM messages;`, (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });


    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

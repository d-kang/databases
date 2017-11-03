var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});



dbConnection.connect(function(err) {
  if (err) {
    console.error('db err', err);
    return;
  }
  console.log('connected as id', dbConnection.threadId);
});

module.exports = dbConnection;

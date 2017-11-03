var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

const query1 = `insert into messages
 (userID, text, roomname)
 values (5, 'hello', 'lobby');`

dbConnection.connect(function(err) {
  if (err) {
    console.error('db err', err);
    return;
  }
  console.log('connected as id', dbConnection.threadId);
});

dbConnection.query(query1, (err, results, fields) => {
  if (err) throw err;
  console.log('results', results);


  dbConnection.query(`SELECT * FROM messages;`, (err, results, fields) => {
    if (err) throw err;
    console.log('results', results);
  })
})



/*
show tables;
select * from messages;

insert into messages
 (userID, text, roomname)
 values (5, 'hello', 'lobby');

*/

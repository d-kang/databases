DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--
-- );


CREATE TABLE messages(
  ID int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users(
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--
-- );

CREATE TABLE Studentssssss(
  LastName varchar(30) NOT NULL,
  FirstName varchar(30) NOT NULL,
  StudId int NOT NULL,
  PRIMARY KEY (StudId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

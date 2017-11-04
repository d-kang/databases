DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--
-- );

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE messages(
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE messages(
--   id int NOT NULL AUTO_INCREMENT,
--   user_id int NOT NULL,
--   text varchar(200) NOT NULL,
--   roomname varchar(20) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (user_id)
--     REFERENCES users(id)
--     ON DELETE CASCADE
-- );

-- SHOW ENGINE INNODB STATUS;
 -- mysql -u root -p
/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

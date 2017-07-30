
DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);

alter table users add constraint unique (username);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- DROP TABLE IF EXISTS `user_table`;
-- CREATE TABLE `user_table` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `username` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`)
-- );
--
-- DROP TABLE IF EXISTS `roomname_table`;
-- CREATE TABLE `roomname_table` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `roomname` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`)
-- );
--
-- DROP TABLE IF EXISTS `message_table`;
-- CREATE TABLE `message_table` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `message` LONGTEXT NOT NULL,
--   `user_id` INT NULL,
--   `room_id` INT NULL,
--   PRIMARY KEY (`id`)
-- );
--
-- ALTER TABLE message_table ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES user_table(id);
-- ALTER TABLE message_table ADD CONSTRAINT FOREIGN KEY (room_id) REFERENCES roomname_table(id);

-- FOREIGN KEY (user_id)
--   REFERENCES user_table(id)
-- FOREIGN KEY (room_id)
--   REFERENCES roomname_table(id)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

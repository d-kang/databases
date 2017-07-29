CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--
-- );

/* Create other tables and define schemas for them here! */

-- ================= where we pasted =====================
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user_table'
--
-- ---

DROP TABLE IF EXISTS `user_table`;

CREATE TABLE `user_table` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'message_table'
--
-- ---

DROP TABLE IF EXISTS `message_table`;

CREATE TABLE `message_table` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `user_id` INTEGER NOT NULL DEFAULT NULL,
  `room_id` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'roomname_table'
--
-- ---

DROP TABLE IF EXISTS `roomname_table`;

CREATE TABLE `roomname_table` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `message_table` ADD FOREIGN KEY (user_id) REFERENCES `user_table` (`id`);
ALTER TABLE `message_table` ADD FOREIGN KEY (room_id) REFERENCES `roomname_table` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user_table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `message_table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roomname_table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user_table` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `message_table` (`id`,`message`,`user_id`,`room_id`) VALUES
-- ('','','','');
-- INSERT INTO `roomname_table` (`id`,`roomname`) VALUES
-- ('','');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

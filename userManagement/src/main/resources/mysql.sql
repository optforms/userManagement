drop database if exists usermanagement;

create database usermanagement;

use  usermanagement;

DROP TABLE IF EXISTS `user`;
 
CREATE TABLE `user` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`first_name` varchar(11) DEFAULT NULL,
`last_name` varchar(11) DEFAULT NULL,
`username` varchar(11) DEFAULT NULL,
`email`    varchar(20) DEFAULT NULL,
`created` datetime DEFAULT NULL,
`updated` datetime DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
 
LOCK TABLES `user` WRITE;
 
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `created`, `updated`)
VALUES
(1,'Hari','Nivesh','test','2018-01-01 00:00:00','2018-01-01 00:00:00');

select * from usermanagement.user;
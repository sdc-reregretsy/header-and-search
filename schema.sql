DROP DATABASE IF EXISTS search;

CREATE DATABASE search;

USE search;

CREATE TABLE items (
  listing_id int NOT NULL,
  title varchar(255) NOT NULL,
  PRIMARY KEY (listing_id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
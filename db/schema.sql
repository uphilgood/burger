CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured boolean,
  PRIMARY KEY(id)
);



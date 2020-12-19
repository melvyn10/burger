DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers_db.burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) not NULL,
  devoured int NULL,
  PRIMARY KEY (id)
);

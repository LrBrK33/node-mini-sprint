DROP DATABASE quotes;

CREATE DATABASE quotes;

USE quotes;

CREATE TABLE quotes (
  id INT AUTO_INCREMENT,
  quote VARCHAR(250),
  PRIMARY KEY(id)
);

INSERT INTO quotes (quote) VALUES ("Face your fears. Live your dreams."),
  ("You miss every shot you don't take."),
  ("Be the change that you wish to see in the world"),
  ("Problems are not stop signs, they are guidelines."),
  ("The harder I work, the more luck I seem to have.");

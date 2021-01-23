DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
                              id INT AUTO_INCREMENT  PRIMARY KEY,
                              email VARCHAR(80) NOT NULL,
                              message VARCHAR(500) NOT NULL
);
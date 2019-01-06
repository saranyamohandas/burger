USE xzk6oktanqi3ho0b;
CREATE TABLE burgers (
        id INT AUTO_INCREMENT NOT NULL,
        burger_name VARCHAR(30),
        devoured BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	    PRIMARY KEY(id)
);


USE xzk6oktanqi3ho0b;
SELECT * FROM burgers;
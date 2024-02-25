-- create a table for the database named "reagents" with the following columns: {id(UNIQ), catagory, name, packSize, test, brand} 

CREATE TABLE reagents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    catagory TEXT,
    name TEXT,
    packSize TEXT,
    test TEXT,
    brand TEXT
);

--  create device table 
CREATE TABLE devices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    catagory TEXT,
    name TEXT,
    packSize TEXT,
    test TEXT,
    brand TEXT
);

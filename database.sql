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


-- Fully Automated Hematology Analyzer
-- Dymind Fully Automated 5 Part Differential 27 Parameters Hematology Analyzer Including all standard accessories.
-- Brand : Dymind
-- Model : DF 50
-- Manufacture: Dymind, 
-- Principle Germany, Assembly China.

-- Here is the data create a table for the database callde machines with the following columns: {id(UNIQ), name, details, brand, model, Manufacture and image }

CREATE TABLE machines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    details TEXT,
    brand TEXT,
    model TEXT,
    Manufacture TEXT,
    image TEXT
);

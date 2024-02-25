import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
const upload = multer( { dest: 'uploads/' } )
dotenv.config();

// Create a connection
const port = process.env.SERVER_PORT || 5000;


const app = express();
app.use( cors() );
app.use( express.json() );

// Create a connection
const connection = mysql.createConnection( {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
} );

// Connect to the database
connection.connect( ( err ) => {
    if ( err ) {
        console.error( 'Error connecting to MySQL:', err );
        return;
    }
    console.log( 'Connected to MySQL!' );
} );


app.get( '/api/ourclients', ( req, res ) => {
    connection.query( 'SELECT * FROM ourclients', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
} );

app.get( '/api/ourbranchs', ( req, res ) => {
    connection.query( 'SELECT * FROM ourbranchs', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
}
);

app.get( '/api/contact', ( req, res ) => {
    connection.query( 'SELECT * FROM contact', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
} );

app.get( '/api/reagents', ( req, res ) => {
    connection.query( 'SELECT * FROM reagents', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
}
);

app.get( '/api/products-category/:category', ( req, res ) => {
    connection.query( 'SELECT * FROM products WHERE category = ?', [ req.params.category ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
}
);

app.delete( '/api/reagents/:id', ( req, res ) => {
    connection.query( 'DELETE FROM reagents WHERE id = ?', [ req.params.id ], ( err ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error deleting reagent' );
            return;
        }
        res.status( 200 ).send( 'Reagent deleted' );
    } );
} );

app.post( '/api/reagents', ( req, res ) => {
    const reagents = req.body;
    connection.query( 'INSERT INTO reagents SET ?', [ reagents ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

app.get( '/api/device', ( req, res ) => {
    connection.query( 'SELECT * FROM device', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            console.log( err );
            return;
        }
        res.json( results );
    } );
} );

app.post( '/api/device', ( req, res ) => {
    const device = req.body;
    connection.query( 'INSERT INTO device SET ?', [ device ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

app.delete( '/api/device/:id', ( req, res ) => {
    connection.query( 'DELETE FROM device WHERE id = ?', [ req.params.id ], ( err ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error deleting device' );
            console.log( err );
            return;
        }
        res.status( 200 ).send( 'Device deleted' );
    } );
} );

app.get( '/api/machines', ( req, res ) => {
    connection.query( 'SELECT * FROM machines', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
} );

app.post( '/api/machines', ( req, res ) => {
    const machines = req.body;
    connection.query( 'INSERT INTO machines SET ?', [ machines ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    }
    );
} );

app.delete( '/api/machines/:id', ( req, res ) => {
    connection.query( 'DELETE FROM machines WHERE id = ?', [ req.params.id ], ( err ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error deleting machine' );
            return;
        }
        res.status( 200 ).send( 'Machine deleted' );
    } );
} );

// Add Machine with name, details, brand, model, Manufacture and image, image will upload in local storate
app.get( '/api/machines', ( req, res ) => {
    connection.query( 'SELECT * FROM machines', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
} );

app.post( '/api/addMachine', ( req, res ) => {
    const machine = req.body;
    connection.query( 'INSERT INTO machines SET ?', [ machine ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            console.log( err );
            return;
        }
        res.status( 200 ).send( 'Machine added' );
        console.log( machine );
    } );
} );

app.post( '/api/uploadImage', upload.single( 'image' ), ( req, res ) => {
    res.status( 200 ).send( 'Image uploaded' );
    console.log( req.file );
} );

app.listen( port, () => {
    console.log( `Server is running on port ${port}` );
} );


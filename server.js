import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const port = 3001;


const app = express();
app.use( cors() );
app.use( express.json() );

// Create a connection
const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testr'
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

app.get( '/api/products', ( req, res ) => {
    connection.query( 'SELECT * FROM products', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results );
    } );
}
);

app.get( '/api/products/:id', ( req, res ) => {
    connection.query( 'SELECT * FROM products WHERE id = ?', [ req.params.id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error retrieving data from database' );
            return;
        }
        res.json( results[ 0 ] );
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

app.post( 'api/reagents', ( req, res ) => {
    const reagent = req.body;
    connection.query( 'INSERT INTO reagents SET ?', reagent, ( err, result ) => {
        if ( err ) {
            res.status( 500 ).send( 'Error saving reagent' );
            return;
        }
        res.status( 201 ).send( 'Reagent added with ID: ${result.insertId}' );
    } );
} );

// Close the connection
// connection.end( ( err ) => {
//     if ( err ) {
//         console.error( 'Error closing MySQL connection:', err );
//         return;
//     }
//     console.log( 'MySQL connection closed!' );
// } );


app.listen( port, () => {
    console.log( `Server is running on port ${port}` );
} );


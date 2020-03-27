const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require( './routes/user' );

// obtain variables from dotenv file
require('dotenv').config();

// express server variables
const app = express();
const port = process.env.PORT || 4000;

// setup express middleware
app.use( cors() );
app.use( express.json() );

//connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose
     .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

// check to see if connected if so display in console
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected')
})

//connect routes 
app.use( '/exercises', exercisesRouter)
app.use( '/users', usersRouter)

// listens for server on port and display in console
app.listen( port, () => {
    console.log( `Server running, on port: ${port}` );
});
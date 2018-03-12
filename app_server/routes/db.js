import { mongo } from 'mongoose';

const mongoose = require('mongoose');
const dbURI = 'mongodb://<dbuser>:<dbpassword>@ds261078.mlab.com:61078/patriciacv';

mongoose.connect(dbURI);

// Printing a connection status message on the console
mongoose.connection.on('connected', function() {
    console.log(`Mongoose connected to ${dbURI}`);
})

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
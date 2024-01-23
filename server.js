// Import the express module
const express = require('express');


// Create an instance of the Express application
const app = express();

const { initDb } = require('./mongolia/mongo.js');

// Create an instance of the Express Router
const router = require('./routes/index.js');
app.use('/', router);

// Set the port for the server. If the environment variable 'Port' is not set, default to port 3000
const port = process.env.PORT || 3000;

initDb((err) => {
    if (err) {
        console.error('Error initializing MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});
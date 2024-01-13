// Import the express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Morris!');
});

// Create an instance of the Express Router
const router = express.Router("/routes/index.js");

// Define a route for the root URL ('/') within the router
router.get('/', (req, res) => {
    res.json({ message: 'Morris' });
});

// Set the port for the server. If the environment variable 'Port' is not set, default to port 3000
const port = process.env.Port || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


/// write me a function that takes in a string and returns the string in reverse order




const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')

// Import the express module
const express = require('express');


// Create an instance of the Express application
const app = express();

const { initDb } = require('./mongolia/mongo.js');

// Create an instance of the Express Router
const router = require('./routes/index.js');
// Add support for CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });
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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
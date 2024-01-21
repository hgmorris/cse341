const { MongoClient } = require('mongodb');
require('dotenv').config();
 
let db;
 
async function initDb(callback) {
    const uri = process.env.MONGODB_ENV;
 
    // Append the database name to the URI
    const uriWithDb = `${uri}cse341`;
 
    const client = new MongoClient(uriWithDb, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
        await client.connect();
        db = client.db(); // Access the specified database 'cse_341'
        console.log('Connected to MongoDB');
        callback(null, db);
    } catch (e) {
        console.error('Error connecting to MongoDB:', e);
        callback(e, null);
    }
}
 
function getDb() {
    if (db) {
        return db;
    } else {
        console.error('MongoDB not initialized. Call initDb() first.');
        return null;
    }
}
 
module.exports = { initDb, getDb };
 
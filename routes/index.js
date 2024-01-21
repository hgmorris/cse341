
const express = require('express');
const app = express();
const contactsRoutes = require('./routes/contacts.js');

// Use the contacts routes
app.use('/contacts', contactsRoutes);

// Default route
app.get('/', (req, res) => {
    res.json({ message: 'Morris' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const router = require('express').Router();
const contactsRoutes = require('./contact');

// Use the contacts routes
router.use('/contacts', contactsRoutes);

// Default route
router.get('/', (req, res) => {
    res.json({ message: 'Morris' });
});

module.exports = router;
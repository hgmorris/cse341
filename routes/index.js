
const router = require('express').Router();
const contactsRoutes = require('./contact');

// Use the contacts routes
router.use('/', contactsRoutes);

// Default route
router.get('/', (req, res) => {
    res.send('Morris');
});

router.get('/mor', (req, res) => {
    res.send('Na me');
});

module.exports = router;
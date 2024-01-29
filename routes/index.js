
const router = require('express').Router();
const contactsRoutes = require('./contact');
const nameRoutes = require('../controller/name');

// Use the contacts routes
router.get('/', contactsRoutes);

// Default route
router.get('/', nameRoutes.getMorris)
router.get('/mor', nameRoutes.getMorris2);

module.exports = router;
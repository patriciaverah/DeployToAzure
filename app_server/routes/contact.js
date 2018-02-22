var express = require('express');
var router = express.Router();

var ctrlContact = require('../controllers/ctrlContact');

/* GET contact page. */
router.get('/', ctrlContact.contact);

module.exports = router;

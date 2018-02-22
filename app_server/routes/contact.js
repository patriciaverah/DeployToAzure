var express = require('express');
var router = express.Router();

var ctrlContact = require('../controllers/ctrlContact');

/* GET home page. */
router.get('/', ctrlContact.email);

module.exports = router;

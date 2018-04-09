var express = require('express');
var router = express.Router();

var ctrlHobbies = require('../controllers/ctrlHobbies');

/* GET home page. */
router.get('/', ctrlHobbies.hobbies);

module.exports = router;

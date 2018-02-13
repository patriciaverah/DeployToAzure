var express = require('express');
var router = express.Router();

var ctrlHobbies = require('../controllers/ctrlContests');

/* GET home page. */
router.get('/', ctrlContests.winnerlist);

module.exports = router;

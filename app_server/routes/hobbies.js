var express = require('express');
var router = express.Router();

var ctrlGoldenBall = require('../controllers/ctrlHobbies');

/* GET home page. */
router.get('/', ctrlGoldenBall.winnerlist);

module.exports = router;

var express = require('express');
var router = express.Router();

var ctrlStudiesAndJobs = require('../controllers/ctrlStudiesAndJobs');

/* GET home page. */
router.get('/', ctrlStudiesAndJobs.winnerlist);
router.get('/', function(req, res, next) {
  res.render('studiesandjobs', { link: 'https://www.stradivarius.com/'});
});

module.exports = router;

var express = require('express');
var router = express.Router();

var ctrlStudiesAndJobs = require('../controllers/ctrlStudiesAndJobs');

/* GET home page. */
router.get('/', ctrlStudiesAndJobs.winnerlist);
router.get('/', function(req, res, next) {
  res.render('studiesandjobs', { link: 'https://www.stradivarius.com/', link2: 'https://www.elcorteingles.es/', link3: 'https://geoactio.com/#home'});
});

module.exports = router;

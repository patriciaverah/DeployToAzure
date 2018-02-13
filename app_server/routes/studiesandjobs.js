var express = require('express');
var router = express.Router();

var ctrlStudiesAndJobs = require('../controllers/ctrlStudiesAndJobs');

/* GET home page. */
router.get('/', ctrlStudiesAndJobs.studiesandjobsList);

module.exports = router;
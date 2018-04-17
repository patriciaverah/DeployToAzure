const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');
const ctrlStudiesandjobs = require('../controllers/ctrlStudiesAndJobs');

// Defining the routes and associating the routes to their corresponding 
router.get('/', ctrlMain.index); // Home page

router
    .route('/studiesandjobs/add')
    .get(ctrlStudiesandjobs.showForm)   // Display form
    .post(ctrlStudiesandjobs.addData);  // Get form dara and make API call

module.exports = router;

const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');

// Defining the routes and associating the routes to their corresponding 
router.get('/', ctrlMain.index); // Home page

router
    .route('/studiesandjobs/add')
    .get(ctrlStudiesandjobs.showForm) // Display the form
    .post(ctrlStudiesandjobs.addData) // Get from data and make the API call

module.exports = router;

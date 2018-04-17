const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');
// const ctrlContact = require('../controllers/ctrlApiContact');
// const ctrlHobbies = require('../controllers/ctrlApiHobbies');
// const ctrlStudiesandjobs = require('../controllers/ctrlApiStudiesandjobs');

// Defining the routes and associating the routes to their corresponding 
router.get('/', ctrlMain.index); // Home page
// router.get('/hobbies', ctrlHobbies.hobbies); 
// router.get('/contact'. ctrlContact.contact);
// router.get('/studiesandjobs', ctrlStudiesandjobs.studiesandjobs);

router
    .route('/studiesandjobs/add')
    .get(ctrlStudiesandjobs.showForm) // Display the form
    .post(ctrlStudiesandjobs.addData) // Get from data and make the API call

module.exports = router;

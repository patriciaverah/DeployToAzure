const express = require('express');
const router = express.Router();

const ctrlApiContact = require('../controllers/ctrlApiContact');
const ctrlApiHobbies = require('../controllers/ctrlApiHobbies');
const ctrlApiStudiesandjobs = require('../controllers/ctrlApiStudiesandjobs');

// contact (list of contact methods)
router
    .route('/contact')
    .get(ctrlApiContact.contactList)
    .post(ctrlApiContact.addContact);

// hobbies (list of contests)
router
    .route('/hobbies')
    .get(ctrlApiHobbies.hobbiesList)
    .post(ctrlApiHobbies.addHobbie);

// studiesandjobs (list of studies and jobs)
router 
    .route('/studiesandjobs')
    .get(ctrlApiStudiesandjobs.studiesandjobsList)
    .post(ctrlApiStudiesandjobs.addDocument);

module.exports = router;
const express = require('express');
const router = express.Router;

const ctrlApiHobbies = require('../controllers/ctrlApiHobbies');
const ctrApiStudiesandjobs = require('../controllers/ctrlApiStudiesAndJobs');
const ctrlApiContact = require('../controllers/ctrlApiContact');

// hobies
router
    .route('/hobbies')
    .get(ctrlApiHobbies.hobbies)
    .post(ctrlApiHobbies.addHobbie);

// studies and jobs
router
    .route('/studiesandjobs')
    .get(ctrApiStudiesandjobs.studiesandjobs)
    .post(ctrApiStudiesandjobs.addStudyOrJob);

// contact
router 
    .route('/contact')
    .get(ctrlApiContact.contact)
    .post(ctrlApiContact.addContact);

module.exports = router;
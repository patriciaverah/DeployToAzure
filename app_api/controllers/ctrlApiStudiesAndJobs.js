// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the model so we can interact with the collection
const contactModel = mongoose.model('studiesandjobs');

const studiesandjobs = function(req, res) {
    res
        .status(200)
        .json({"category" : "year", "what" : "link"});
}

const addStudyOrJob = function(req, res){
    res
        .status(201)
        .json({"Add study or job" : "Work in progress"});
}

module.exports = {
    studiesandjobs,
    addStudyOrJob
};
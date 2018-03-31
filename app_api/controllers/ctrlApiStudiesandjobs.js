// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'contact' model so we can interact with the contact collection
const studiesandjobsModel = mongoose.model('studiesandjobs');

const studiesandjobsList = function(req, res) {

    studiesandjobsModel.find({}, function(err, studiesandjobs) {
        if(err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(studiesandjobs);
        }
    });

};

const addDocument = function(req, res){
    
    studiesandjobsModel.create(req.body, function(err, newDocument) {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newDocument);
        }
    });

}; 

module.exports = {
    studiesandjobsList,
    addDocument
};
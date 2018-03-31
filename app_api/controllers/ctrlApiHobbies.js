// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'contact' model so we can interact with the contact collection
const hobbiesModel = mongoose.model('hobbies');

const hobbiesList = function(req, res) {
    
    hobbiesModel.find({}, function(err, hobbies) {
        if(err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(hobbies);
        }
    });

};

const addHobbie = function(req, res){
    
    hobbiesModel.create(req.body, function(err, newHobbie) {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newHobbie);
        }
    });

};

module.exports = {
    hobbiesList,
    addHobbie
};
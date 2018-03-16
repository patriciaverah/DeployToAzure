// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the model so we can interact with the collection
const contactModel = mongoose.model('hobbies');

const hobbies = function(req, res) {
    res
        .status(200)
        .json({"year" : "contest"});
}

const addHobbie = function(req, res){
    res
        .status(201)
        .json({"Add hobby" : "Work in progress"});
}

module.exports = {
    hobbies,
    addHobbie
};
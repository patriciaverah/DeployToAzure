// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the model so we can interact with the collection
const contactModel = mongoose.model('contact');

const contact = function(req, res) {
    res
        .status(200)
        .json({"description" : "contact"});
}

const addContact = function(req, res){
    res
        .status(201)
        .json({"Add contact" : "Work in progress"});
}

module.exports = {
    contact,
    addContact
};
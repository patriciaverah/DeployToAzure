// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'contact' model so we can interact with the contact collection
const contactModel = mongoose.model('contact');

const contactList = function(req, res) {
    
    contactModel.find({}, function(err, contacts) {
        if(err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(contacts);
        }
    });

};

const addContact = function(req, res){
    
    contactModel.create(req.body, function(err, newContact) {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newContact);
        }
    });

}; 

module.exports = {
    contactList,
    addContact
};
// Require the request module and the apiURL files
const request = require('request');
const apiURL = require('./apiURLs');

const contact = function(req, res) {
    const path = '/api/contact';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request (
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ")"});
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('contact', {contact: body});
            }
        }
    );
};

/* var contact = function(req, res){
    res.render('contact', {personal: 'p.vhernandez@hotmail.com',
                           uni: 'patricia.vera.hernandez@student.laurea.com'});
}; */

module.exports = {
    contact
};

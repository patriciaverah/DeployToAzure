// Require the request module and the apiURL files
const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function (req, res) {
    res.render('studiesandjobs_add');
};

const studiesandjobs = function(req, res) {
    const path = '/api/studiesandjobs';
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
                res.render('studiesandjobs', {studiesandjobs: body});
            }
        }
    );
};

const addData = function (req, res){
    const path = '/api/studiesandjobs';

    const postdata = {
        category: req.body.category,
        year: req.body.year,
        what: req.body.what
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request (
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/studiesandjobs');
            } else {
                res.render('error', {message: 'Error adding data: ' + response.statusMessage + ' (' + response.statusCode + ')'});
            }
        }
    );
};

module.exports = {
    studiesandjobs,
    showForm,
    addData
};

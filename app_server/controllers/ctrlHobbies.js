// Require the request module and the apiURL files
const request = require('request');
const apiURL = require('./apiURLs');

const hobbies = function(req, res) {
    const path = '/api/hobbies';
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
                res.render('hobbies', {hobbies: body});
            }
        }
    );
}

/*var winnerlist = function(req, res){
    res.render('hobbies', {link:'https://www.flickr.com/photos/patriciaverah/',
                          winners:
                          [
                              {year: '2017', contest: 'Google Hashcode'},
                              {year: '2018', contest: 'Nokia Hackathon, Helsinki - got the 3rd place!'}
                          ]});
};*/

module.exports = {
    hobbies
};

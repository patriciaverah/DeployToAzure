// Require the request module and the apiURL files
const request = require('request');
const apiURL = require('./apiURLs');

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

/*var winnerlist = function(req, res){
    res.render('studiesandjobs',{
        winners:
        [
            {category: 'study', year:'2014-2018', what:'Computer Science, Universidad Pública de Navarra'},
            {category: 'work', year:'2017', what:'Saleswoman in Stradivarius'},
            {category: 'work', year:'2017', what:'Saleswoman in El Corte Inglés'},
            {category: 'work', year:'2017', what:'Software developer in GeoActio (internship)'},
            {category: 'study', year:'2018', what:'Exchange semester, Laurea University of Applied Sciences'},

            {category: 'study', year:'unknown', what:'B2 - English'},
            {category: 'study', year:'unknown', what:'A2 - German'},
            {category: 'study', year:'unknown', what:'Photography courses online and in Universidad Pública de Navarra'}
        ],
        link: 'https://www.stradivarius.com/',
        link2: 'https://www.elcorteingles.es/',
        link3: 'https://geoactio.com/#home'});
};*/

module.exports = {
    studiesandjobs
};

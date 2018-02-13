/* GET home page */
var index = function(req, res){
    res.render('index', {link: 'https://github.com/patriciaverah/DeployToAzure'});
};

module.exports = {
    index
};

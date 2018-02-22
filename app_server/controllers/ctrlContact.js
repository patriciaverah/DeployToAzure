/* GET home page */
var index = function(req, res){
    res.render('contact', {link: 'p.vhernandez@hotmail.com'});
};

module.exports = {
    contact
};

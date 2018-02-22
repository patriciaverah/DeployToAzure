/* GET home page */
var contact = function(req, res){
    res.render('contact', {personal: 'p.vhernandez@hotmail.com',
                           uni: 'patricia.vera.hernandez@student.laurea.com'});
};

module.exports = {
    contact
};

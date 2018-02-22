/* GET home page */
var contact = function(req, res){
    res.render('contact', {personal-email: 'p.vhernandez@hotmail.com',
                           uni-email: 'patricia.vera.hernandez@student.laurea.com'});
};

module.exports = {
    contact
};

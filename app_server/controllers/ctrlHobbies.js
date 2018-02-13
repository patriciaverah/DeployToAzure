/* GET home page */
var winnerlist = function(req, res){
    res.render('hobbies',{
        winners:
        [
            {socialmedia:'Flickr', link:'https://www.flickr.com/photos/patriciaverah/'}
        ]});
};
module.exports = {
    winnerlist
};

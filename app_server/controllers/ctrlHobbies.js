/* GET home page */
var winnerlist = function(req, res){
    res.render('hobbies', {link:'https://www.flickr.com/photos/patriciaverah/',
                          winners:
                          [
                              {year: '2017', contest: 'Google Hashcode'},
                              {year: '2018', contest: 'Nokia Hackathon, Helsinki - got the 3rd place!'}
                          ]});
};
module.exports = {
    winnerlist
};

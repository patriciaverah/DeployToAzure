/* GET home page */
var winnerlist = function(req, res){
    res.render('studiesandjobs',{
        winners:
        [
            {year:'1990', team:'Germany'},
            {year:'1994', team:'Brazil'},
            {year:'1998', team:'France'},
            {year:'2002', team:'Brazil'},
            {year:'2006', team:'Italy'},
            {year:'2010', team:'Spain'},
            {year:'2014', team:'Germany'}
        ]});
};
module.exports = {
    winnerlist
};

/* GET home page */
var winnerlist = function(req, res){
    res.render('hobbies',{
        winners:
        [
            {year:'1990', player:'Salvatore Schillaci', team: 'Italy'},
            {year:'1994', player:'Romário', team: 'Brazil'},
            {year:'1998', player:'Ronaldo', team: 'Brazil'},
            {year:'2002', player:'Oliver Khan', team: 'Germany'},
            {year:'2006', player:'Zinedine Zidane', team: 'France'},
            {year:'2010', player:'Diego Forlán', team: 'Uruguay'},
            {year:'2014', player:'Lionel Messi', team: 'Argentina'}
        ]});
};
module.exports = {
    winnerlist
};
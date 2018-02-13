/* GET home page */
var winnerlist = function(req, res){
    res.render('studiesandjobs',{
        winners:
        [
            {category: 'study', year:'unknown', what:'B2 - English'},
            {category: 'study', year:'unknown', what:'A2 - German'}
            {category: 'study', year:'unknown', what:'Photography courses online and in Universidad Pública de Navarra'}
            {category: 'study', year:'2014-2018', what:'Computer Science, Universidad Pública de Navarra'},
            {category: 'work', year:'2017', what:'Saleswoman in Stradivarius'},
            {category: 'work', year:'2017', what:'Saleswoman in El Corte Inglés'},
            {category: 'work', year:'2017', what:'Software developer in GeoActios'},
            {category: 'study', year:'2018', what:'Exchange semester, Laurea University of Applied Sciences'}
        ]});
};
module.exports = {
    winnerlist
};

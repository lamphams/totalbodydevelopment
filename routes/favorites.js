var savedFavorites = require('../savedFavorites.json');

exports.viewfavorites = function(req, res) { 
	console.log("trying to display all favorites of: " + JSON.stringify(savedFavorites));
  res.render('favorites', savedFavorites);
};

exports.returnFavorites = function(req, res) {
	console.log("trying to display what current savedFavorites are which is: " + JSON.stringify(savedFavorites));
	res.send(savedFavorites);
}

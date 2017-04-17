var savedFavorites = require('../savedFavorites.json');

exports.add = function(req, res) { 
	console.log(req.query.id);
	var myJString = {"video" : req.query.id};//JSON.stringify({video: req.query.id});
	savedFavorites.favorites.push(myJString);
	console.log(savedFavorites);
};

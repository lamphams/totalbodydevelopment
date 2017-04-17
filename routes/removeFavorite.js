var savedFavorites = require('../savedFavorites.json');

exports.remove = function(req, res) { 
	console.log("given json: " + JSON.stringify(savedFavorites));
	console.log("Trying to remove: " + req.query.id);
	var vidRemove = req.query.id;
	console.log("saved Favorites length is: " + savedFavorites.favorites.length);
	//delete it which causes it to become null
	for(var i = 0; i < savedFavorites.favorites.length; i++) {
		console.log("iteration " + i + " is " + savedFavorites.favorites[i]);
    	if(savedFavorites.favorites[i]["video"] == vidRemove) {
    		console.log("found it and trying to remove");
    		savedFavorites.favorites.splice(i, 1);
    	}
	}
	console.log(savedFavorites);
};

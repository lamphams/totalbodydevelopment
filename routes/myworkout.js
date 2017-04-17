var yourList = require('../yourList.json');
exports.viewWorkoutScreen = function(req, res) { 
  res.render('myworkout', {
    'dropdown': true
  });
};

/*exports.viewDropdownWorkoutScreen = function(req, res) { 
  res.render('myworkout', {
    'dropdown': true
  });
};*/

exports.removeWorkout = function(req, res) {
	console.log("/n /n /n /n ------------------------------------------");
	console.log("given json: " + JSON.stringify(yourList));
	console.log("Trying to remove: " + req.query.id);
	var vidRemove = req.query.id;
	var name = req.query.name;
	console.log(yourList.workouts[name]);
	//delete it which causes it to become null
	
	for(var i = 0; i < yourList.workouts[name].length; i++) {
		console.log("comparing first");
		console.log(yourList.workouts[name][i]['video']);
		console.log("second compare is:" + vidRemove);
    	if(yourList.workouts[name][i]['video'] == vidRemove) {
    		console.log("found it and trying to remove");
    		yourList.workouts[name].splice(i, 1);
    	}
	}
	console.log(yourList);
	
};

exports.listReturn = function(req, res) {
	res.send(yourList);
}
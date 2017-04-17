var workouts = require('../workouts.json');
var list = require('../yourList.json');

exports.viewWorkoutResults = function(req, res) { 
	console.log("req id is: " + req.query.id);
	
	if(req.query.id == 'Neck') {	
		var neckWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Neck));
 		console.log(neckWorkouts);
 		console.log("printed neckWorkouts from workoutresults");
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': neckWorkouts,
			
		});
	}
	else if(req.query.id == 'Chest') {
		var chestWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Chest));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': chestWorkouts,
			
		});
	}
	else if(req.query.id == 'Arms') {
		var armWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Arms));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': armWorkouts,
			
		});
	}
	else if(req.query.id == 'FullBody') {
		var fullBodyWorkouts = JSON.parse(JSON.stringify(workouts.workouts.FullBody));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': fullBodyWorkouts,
			
		});
	}
	else if(req.query.id == 'Shoulders') {
		var shoulderWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Shoulders));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': shoulderWorkouts,
			
		});
	}
	else if(req.query.id == 'Abs') {
		var abWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Abs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': abWorkouts,
			
		});
	}
	else if(req.query.id == 'Legs') {
		var legWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Legs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': legWorkouts,
			
		});
	}
};
/*
exports.viewDropdownWorkoutResults = function(req, res) { 
	console.log("req id is: " + req.query.id);

	list['dropdown'] = true;

	if(req.query.id == 'Neck') {	
		var neckWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Neck));
 		console.log(neckWorkouts);
 		console.log("printed neckWorkouts from workoutresults");
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': neckWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'Chest') {
		var chestWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Chest));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': chestWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'Arms') {
		var armWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Arms));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': armWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'FullBody') {
		var fullBodyWorkouts = JSON.parse(JSON.stringify(workouts.workouts.FullBody));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': fullBodyWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'Shoulders') {
		var shoulderWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Shoulders));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': shoulderWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'Abs') {
		var abWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Abs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': abWorkouts,
			'dropdown': true
			
		});
	}
	else if(req.query.id == 'Legs') {
		var legWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Legs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': legWorkouts,
			'dropdown': true
			
		});
	}
};*/


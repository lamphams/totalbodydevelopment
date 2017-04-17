var yourlist = require("../yourList.json");

exports.viewWorkoutList = function(req, res) { 

	    var neck = JSON.parse(JSON.stringify(yourlist.workouts.Neck));
	    		console.log(neck);
	    var arms = JSON.parse(JSON.stringify(yourlist.workouts.Arms));
	    		console.log(arms);
		var legs = JSON.parse(JSON.stringify(yourlist.workouts.Legs));
	    		console.log(legs);	  
	    var shoulders = JSON.parse(JSON.stringify(yourlist.workouts.Shoulders));
	    		console.log(shoulders); 
	    var fullbody = JSON.parse(JSON.stringify(yourlist.workouts.FullBody));
	    		console.log(fullbody);
	    var abs = JSON.parse(JSON.stringify(yourlist.workouts.Abs));
	    		console.log(abs);
	    var chest = JSON.parse(JSON.stringify(yourlist.workouts.Chest));
	    		console.log(chest); 		
	    var bool = yourlist["dropdown"];
	    

		res.render('yourlist', {
			'neck': neck,
			'arms': arms,
			'legs': legs,
			'shoulders': shoulders,
			'fullBody': fullbody,
			'abs': abs,
			'chest': chest,
			'dropdown': bool
		});
};

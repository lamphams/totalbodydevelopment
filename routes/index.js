var userJSON = require('../user.json');
var list = require('../yourList.json');
/*
 * GET home page.
 */

 exports.view = function(req, res){
		var today = new Date();
	if(userJSON.date == "" || userJSON.date == undefined) {
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	}

	userJSON['dropdown'] = false;
	list['dropdown'] = false;


	res.render('index', userJSON);

};

exports.viewDropdown = function(req, res){
	var today = new Date();
	if(userJSON.date == "" || userJSON.date == undefined) {
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	}
	userJSON['dropdown'] = true;
	list['dropdown'] = true;

	res.render('index', userJSON);
};

exports.viewLogin = function(req, res){

	var name = req.body.first + " " + req.body.last;

	userJSON["name"] = name;
	var today = new Date();
	if(userJSON.date == "" || userJSON.date == undefined) {
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	}
	console.log(userJSON);

	res.render('index', userJSON);
};

var days = require('../days.json');

exports.viewBodyMap = function(req, res) { 

  if(req.query.id == undefined) {
    var bodyMap = "Body Map"
  	res.render('bodyMap', {
  	 'title': bodyMap,
     'day': "",
     'dropdown': true
  });
  } else {
  	var day = req.query.id;
    console.log(day);
    var day  = days.days[day];
    var title = 
  	res.render('bodyMap', {
  		'title': "Friday",
      'day': req.query.id,
     'dropdown': true
  	});
  }

};
/*
exports.viewDropdownBodyMap = function(req, res) { 

  if(req.query.id == undefined) {
    var bodyMap = "Body Map"
    res.render('bodyMap', {
     'title': bodyMap,
     'day': "",
     'dropdown': true
  });
  } else {
    var day = req.query.id;
    console.log(day);
    var day  = days.days[day];
    var title = 
    res.render('bodyMap', {
      'title': "Friday",
      'day': req.query.id,
      'dropdown': true
    });
  }

};*/
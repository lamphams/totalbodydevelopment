var listToAdd = require("../yourList.json");



exports.addWorkoutToList = function(req, res) {    
    console.log("addWorkoutToList called");

    console.log(req.query.name);
    console.log(req.query.id);
    var newListItem = {
       'video': req.query.id,
       'name': req.query.name
    }

    if(req.query.name == "Arms") {
        listToAdd.workouts.Arms.push(newListItem);

    } else if(req.query.name == "Neck") {
        listToAdd.workouts.Neck.push(newListItem);

    } else if(req.query.name == "Legs") {
        listToAdd.workouts.Legs.push(newListItem);

    } else if(req.query.name == "FullBody") {
        listToAdd.workouts.FullBody.push(newListItem);

    } else if(req.query.name == "Chest") {
        listToAdd.workouts.Chest.push(newListItem);

    } else if(req.query.name == "Abs") {
        listToAdd.workouts.Abs.push(newListItem);

    } else if(req.query.name == "Shoulders") {
        listToAdd.workouts.Shoulders.push(newListItem);

    }
     
    console.log("this is the workout you're adding not in dropdown.");
    console.log(newListItem);
    console.log("this is the entire list now");
    console.log(listToAdd);


    res.redirect('yourlist');
}

/*exports.addDropdownWorkoutToList = function(req, res) {    
    console.log("adddropdownWorkoutToList called");
    console.log(req.query.name);

    

    listToAdd["dropdown"] = true;
    var newListItem = {
       'video': req.query.id,
       'name': req.query.name,
       'info': req.query.info,
       'Description': req.query.desc
    }

    listToAdd.workouts.push(newListItem);
    console.log(listToAdd);

    res.redirect('yourlist');

    
}*/

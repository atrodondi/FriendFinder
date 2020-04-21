 var friends = require ("../data/friends");

 module.exports = function(app){
// when api friends page is visited
    app.get("/api/friends", function(req,res){
        res.json(friendsArray)
    });

    // listening for a post to api friends, then....
    app.post("/api/friends", function(req,res){
         // logic to compare req object scores to all scores existing objects in friends array?
        
        let newScores = req.body.scores;
        let totalDiff = 10000000;
        let matchName = "";
        let matchPhoto = "";
        console.log(newScores);
        // for every friend object in the friend array..
        for (var i=0; i<friends.length;i++){
            console.log(friends[i].scores);
          
            let difference = 0;
            //for each item in the score array in that  particular object that is an iteration of the friend array, if...
            for (var j =0;j<friends[i].scores.length;j++){
                // console.log(friendsArray[i].scores[j]);
                // console.log(newScores[j]);
                difference += Math.abs(newScores[j]-parseInt(friends[i].scores[j]));
                
            }
            console.log(difference);
             if (difference < totalDiff){
                
                totalDiff = difference;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
                console.log(totalDiff);
                
             }


            
            
        }
        friends.push(req.body);
        console.log(matchName);
        console.log(matchPhoto);
        res.json({name:matchName,photo:matchPhoto});
        
    });





 };
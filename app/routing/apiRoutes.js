 var friendsArray = require ("../data/friends");

 module.exports = function(app){
// when api friends page is visited
    app.get("/api/friends", function(req,res){
        res.json(friendsArray)
    });

    // listening for a post to api friends, then....
    app.post("/api/friends", function(req,res){
         // logic to compare req object scores to all scores existing objects in friends array?
        
        let newScores = req.body.scores;
      
        console.log(newScores);
        // for every friend object in the friend array..
        for (var i=0; i<friendsArray.length;i++){
            console.log(friendsArray[i].scores);
            let newScores = req.body.scores;
        let totalDiff = 0;
        let largestDiff = 0;
        let matchName = "";
        let diffArray=[];
            
            //for each item in the score array in that  particular object that is an iteration of the friend array, if...
            for (var j =0;j<friendsArray[i].scores.length;j++){
                console.log(friendsArray[i].scores[j]);
                console.log(newScores[j]);
                // let difference = Math.abs(newScores[j]-parseInt(friendsArray[i].scores[j]));
                //  totalDiff +=difference;
                //  diffArray.push({diff: totalDiff,name:friendsArray[i].name});
                 
                //  console.log(diffArray);
                
                
            }
            // console.log(diffArray);
            // let max= Math.max(...diffArray)
            // console.log(max);
            // console.log("Index of max diffference: "+ diffArray.indexOf(max));
            // let match = diffArray.indexOf(max);
            // matchName = friendsArray[match].name;
            // console.log(matchName);
        }
        friendsArray.push(req.body);
        res.json(true);
        
    });





 };
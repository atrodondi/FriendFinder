 var friendsArray = require ("../data/friends");

 module.exports = function(app){
// when api friends page is visited
    app.get("/api/friends", function(req,res){
        res.json(friendsArray)
    });

    // listening for a post to api friends, then....
    app.post("/api/friends", function(req,res){
        
        console.log(req.body.scores);
        console.log(friendsArray[0].scores);
        for (var i=0; i<friendsArray.length;i++){
            console.log(friendsArray[i].scores);
            for (var j =0;j<friendsArray[i].scores.length;j++){
                console.log(friendsArray[i].scores[j]);
                
          
            }
        }
        
        
        
        // logic to compare req object scores to all scores existing objects in friends array


        friendsArray.push(req.body);
res.json(true);
    });





 };
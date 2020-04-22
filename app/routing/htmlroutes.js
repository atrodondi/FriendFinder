var path = require("path");


module.exports = function(app){
// survey end point
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
//  all other end points (home)
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
}
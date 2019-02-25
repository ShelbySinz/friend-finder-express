
var friendData = require("../data/friends.js");
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests


  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

 


  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friend array
   //console.log(req.body);
    var userInput = req.body;
    var newFriendScores = req.body.surveyAnswers;
    var matchName = '';
    var matchImage = '';
    var totalDifference = 20;
    var friends = friendData;
    //runs through all current friends in list
    for(var i=0; i < friends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
     
      for(var j=0; j < newFriendScores.length; j++){
        scoresDiff += Math.abs(friends[i].surveyAnswers[j]- newFriendScores[j]);
      }
      // console.log(friends[i].surveyAnswers)
      // console.log(newFriendScores);
       console.log(scoresDiff);
    if(scoresDiff <= totalDifference){
        
        matchName = friends[i].Name;
        matchImage = friends[i].photo;
    }
  }
 
// Add new user
friendData.push(userInput);

// Send appropriate response
console.log(matchName);
res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
});
};
   



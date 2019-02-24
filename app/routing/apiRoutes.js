
var friendData = require("../data/friends");
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
    var userInput = req.body;
    var newFriendScores = req.body.surveyAnswers;
    var matchName = '';
    var matchImage = 0;
    var totalDifference = 1000;

    //runs through all current friends in list
    for(var i=0; i < friendData.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j < newFriendScores.length; j++){
        scoresDiff += Math.abs(friendData[i].surveyAnswers-newFriendScores[j]);
      }

    if(scoresDiff < totalDifference){
        totalDifference = scoresDiff;
        matchName = friendData[i].name;
        matchImage = friendsData[i].photo;
    }
  }

// Add new user
friendData.push(userInput);

// Send appropriate response
res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
});
};
   



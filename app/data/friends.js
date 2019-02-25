
var friendsArray = [
    {
      Name: "Barney",
      photo:"https://media.giphy.com/media/k39w535jFPYrK/giphy.gif" ,
      surveyAnswers: ["3","2","5","3","2","1","3","5","3","4"]
    },
    {
        Name: "Ted",
        photo: "https://media.giphy.com/media/zYkupB2XW2Y7K/giphy.gif", 
        surveyAnswers: ["3","2","5","5","2","1","5","5","3","4"]
      },
      {
        Name: "Robin",
        photo:"https://media.giphy.com/media/edM5bqYK3l8NW/giphy.gif" , 
        surveyAnswers: ["3","4","5","2","2","1","3","5","4","4"]
      },
      {
        Name: "Lilly",
        photo:"https://media.giphy.com/media/z52VqCTTIXmg0/giphy.gif",
        surveyAnswers: ["3","1","5","2","2","1","3","5","1","4"]

      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
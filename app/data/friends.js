
var friendsArray = [
    {
      Name: "Alice",
      photo:" https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=beautiful-blur-blurred-background-733872.jpg&fm=jpg" ,
      surveyAnswers: ["3","2","5","3","2","1","3","5","3","4"]
    },
    {
        Name: "joe",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-beard-boy-220453.jpg&fm=jpg", 
        surveyAnswers: ["3","2","5","5","2","1","5","5","3","4"]
      },
      {
        Name: "Betty",
        photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=beautiful-brunette-cute-774909.jpg&fm=jpg", 
        surveyAnswers: ["3","4","5","2","2","1","3","5","4","4"]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
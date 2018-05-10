var teacher = {
  name: "Sally Jones",
  department: "Physics",
  ratings: [3.4, 5.0, 4.2]
};



function addTeacherRating (ratings, newRating) {
  ratings[ratings.length] = newRating;
  return ratings;
}

function getRatingAvg (ratings) {
  var sumRatings = 0,
      avgRating;

  for (var i = 0; i < ratings.length; i++) {
    sumRatings += ratings[i];
  }

  avgRating = sumRatings / (ratings.length);

  return Math.round(avgRating * 10) / 10;
}

function getInput () {
  var input = window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
  while (input < 0 || input > 5.1) {
      alert("Please enter a rating between 0.0 - 5.0?");
      input = window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
  }
  input = Number(input);
  return input;
}

addTeacherRating(teacher.ratings, getInput());
alert("Thanks for you review! " +  teacher.name + "'s average rating is now " + getRatingAvg(teacher.ratings) + ".");

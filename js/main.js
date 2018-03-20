var teacher_name = "Sally Jones",
    department_name = "Physics",
    rating = [3.4, 5.0, 4.2],
    sum_rating = 0,
    ave_rating;

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

for (i = 0; i < rating.length; i++) {
  sum_rating = sum_rating + rating[i];
}

ave_rating = sum_rating / (rating.length)


console.log("Teacher: " + teacher_name);
console.log("Department: " + department_name);
console.log("Ratings: " + rating[0].toFixed(1)
            + ", " + rating[1].toFixed(1)
            + ", " + rating[2]);
console.log("Ave Rating: " + round(ave_rating, 1));

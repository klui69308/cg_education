//all the course names and department names
var courseArr = [ ["Math", "Math and Science"],
                   ["Chemistry", "Math and Science"],
                   ["Physcis", "Math and Science"],
                   ["English", "Humanity"],
                   ["JavaScript", "Computer Science"],
                   ["HTML", "Computer Science"],
                   ["CSS", "Computer Science"],
                   ["Painting", "Fine Art"],
                 ];

function departmentNameArr (courseArr) {
  var departmentName = [];
  // filter out only the name of the departments
  for (var i = 0; i < courseArr.length; i++){
    var j = courseArr[i].length - 1;
    departmentName.push(courseArr[i][j]);
  }
  // get rid of the duplicated names
  var deduped = departmentName.filter(function (element, index, arr) {
	   return arr.indexOf(element) === index;
     });

  return deduped; //return the list of department name without duplicates
}

function getInput (departmentName) {
   var bool,
       input = window.prompt("What department are you looking for a course in?");
   // test if the input matched the data
   for (var i = 0; i < departmentName.length; i++) {
     if (input == departmentName[i]) {
       bool = true;
       break;
     }
     else {
       bool = false;
     }
   }
   // loop until meet expectation
   while (bool == false) {
       alert("Please enter a valid department name: ");
       alert(departmentName)
       input = window.prompt("What department are you looking for a course in?");
       for (var i = 0; i < departmentName.length; i++) {
         if (input == departmentName[i]) {
           bool = true;
           break;
         }
         else {
           bool = false;
         }
       }
   }
   return input;
}

function arrByDepartment (arr, targetedDepartment) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var j = arr[i].length - 1;
      if (arr[i][j] == targetedDepartment) {
        newArr.push(arr[i]);
      }
    }
  alert(newArr);
}

arrByDepartment(courseArr, getInput (departmentNameArr (courseArr) ) );

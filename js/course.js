//all the course names and department names
var Course = function (name, department, teacher, semester){
  this.name = name;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
};

var numberOfCourse = 8,
    course1 = new Course ("Math", "Math and Science", "Sally Jones", "Fall"),
    course2 = new Course ("Chemistry", "Math and Science", "Sally Jones", "Fall"),
    course3 = new Course ("Physcis", "Math and Science", "Sally Jones", "Fall"),
    course4 = new Course ("English", "Humanity", "Sally Jones", "Fall"),
    course5 = new Course ("JavaScript", "Computer Science", "Sally Jones", "Fall"),
    course6 = new Course ("HTML", "Computer Science", "Sally Jones", "Fall"),
    course7 = new Course ("CSS", "Computer Science", "Sally Jones", "Fall"),
    course8 = new Course ("Painting", "Fine Art", "Sally Jones", "Fall");

var courseArr = [ [course1.name, course1.department],
                  [course2.name, course2.department],
                  [course3.name, course3.department],
                  [course4.name, course4.department],
                  [course5.name, course5.department],
                  [course6.name, course6.department],
                  [course7.name, course7.department],
                  [course8.name, course8.department]
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

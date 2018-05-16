// Student prototype
var Student = function(name, major, gpa, course, gradMonth, gradYear) {
  this.name = name.split(" ");
  this.firstName = this.name[0].toLowerCase();
  this.lastName = this.name[this.name.length -1].toLowerCase();
  this.major = major;
  this.gradMonth = gradMonth;
  this.gradYear = gradYear;
  this.email = this.firstName + "." + this.lastName + "@email.edu";
  this.avgGPA = gpa;
  this.course = course;
}

var student1 = new Student ("John Smith", "Physics", 4.0, ["Physics 101", "Calculus"], "May", 2019),
    student2 = new Student ("Adam Lee Roy", "Chemistry", 4.0, ["Chemistry 101", "English 101"], "December", 2020),
    student3 = new Student ("Sophia Erica Lui", "Computer Science", 4.0, ["JavaScript", "HTML", "CSS"], "May", 2023);

//addCourse function
Student.prototype.addCourse = function (newCourse) {
  this.course.push (newCourse);
}
//dropCourse function
Student.prototype.dropCourse = function (dropCourse) {
  for (var i = 0; i < this.course.length; i++) {
    if (this.course[i] == dropCourse) {
      var indexToRemoved = this.course.indexOf(dropCourse);
      this.course.splice (indexToRemoved, 1);
    }
  }
}
//changeMajor function
Student.prototype.changeMajor  = function (newMajor) {
  this.major = newMajor;
}

//prompt user about add or drop or change major
var action = window.prompt("Add, Drop, or change major: ");

action = action.toLowerCase();

//storing the variables of action
var newCourse,
    dropCourse,
    changeMajor;

switch (action) {
  case "add":
    newCourse = window.prompt("What class would you like to add?");
    break;
  case "drop":
    dropCourse = window.prompt("What class would you like to drop?");
    break;
  case "change major":
    changeMajor = window.prompt("What is your new major?");
    break;
  default:
    alert ("Nothing will change!!!");
}

function welcomeStudentsByGraduatingClass (gradYear, gradMonth, welcomeMessage) {
  var gradClass;
  if (gradMonth == "May" && gradYear < 2022) {
    switch (gradYear) {
      case 2018:
        gradClass = "Senior";
        break;
      case 2019:
        gradClass = "Junior";
        break;
      case 2020:
        gradClass = "Sophomore";
        break;
      case 2021:
        gradClass = "Freshman";
        break;
    }
  }
  else if (gradMonth == "December" && gradYear < 2022){
    switch (gradYear) {
      case 2018:
        gradClass = "Junior";
        break;
      case 2019:
        gradClass = "Sophomore";
        break;
      case 2020:
        gradClass = "Freshman";
        break;
    }
  }
  else if (gradMonth == "May" && gradYear >= 2022 && gradYear < 2026) {
    switch (gradYear) {
      case 2022:
        gradClass = "Senior";
      case 2023:
        gradClass = "Junior";
        break;
      case 2024:
        gradClass = "Sophomore";
        break;
      case 2025:
        gradClass = "Freshman";
        break;
  }
}
  else if (gradMonth == "December" && gradYear >= 2022 && gradYear < 2026) {
    switch (gradYear) {
      case 2022:
        gradClass = "Junior";
        break;
      case 2023:
        gradClass = "Sophomore";
        break;
      case 2024:
        gradClass = "Freshman";
        break;
  }
}
  welcomeMessage(gradClass);
}

var welcomeCollegeStudent = function (studentClass) {
      alert ("Welcome " + studentClass + "!");
    },
    welcomeHsStudent = function(studentClass) {
      alert ("You're still a " + studentClass + " in high school!")
    };

var gradYear,
    gradMonth,
    boolYear = false,
    boolMonth = false;

gradYear = window.prompt("Please enter your graduation year: ");
gradYear = Number(gradYear);

if (gradYear >= 2017 && gradYear <= 2030) {
  boolYear = true;
}
while (boolYear == false) {
  alert ("Please enter a valid graduation year between 2017 and 2030: ");
  gradYear = window.prompt("Please enter your graduation year: ");
  if (gradYear >= 2017 && gradYear <= 2030) {
    boolYear = true;
  }
}
gradMonth = window.prompt("Please enter your graduation month: ");
if (gradMonth == "May" || gradMonth == "December") {
  boolMonth = true;
}
while (boolMonth == false) {
  alert ("There are only 2 possible graduation months: May and December.");
  gradMonth = window.prompt("Please enter your graduation month: ");
  if (gradMonth == "May" || gradMonth == "December") {
    boolMonth = true;
  }
}
if (gradYear > 2021 && gradYear < 2026) {
  welcomeStudentsByGraduatingClass(gradYear, gradMonth, welcomeHsStudent);
}
else if (gradYear > 2017 && gradYear <= 2021){
  welcomeStudentsByGraduatingClass(gradYear, gradMonth, welcomeCollegeStudent);
}
else {
  alert ("You're still a Junior in high school!");
}

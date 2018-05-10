
function gradDate (month, year) {
    return month + " " + year;
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

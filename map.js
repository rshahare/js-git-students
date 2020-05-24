// https://www.w3schools.com/jsref/jsref_map.asp

// JavaScript Array map() Method

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;

//The map() method creates a new array with the results of calling a function for every array element.

//The map() method calls the provided function once for each element in an array, in order.

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

document.getElementById("demo").innerHTML = newarray;;

// Get the full name for each person in the array:
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

function myFunction() {
  document.getElementById("demo").innerHTML = persons.map(getFullName);
}



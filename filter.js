// https://alligator.io/js/filter-array-method/
//filter() creates a new array with elements that fall under a given criteria from an existing array:

var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});

// [ 8, 11 ]




// A common use case of .filter() is with an array of objects through their properties:
var heroes = [
	{name: “Batman”, franchise: “DC”},
	{name: “Ironman”, franchise: “Marvel”},
	{name: “Thor”, franchise: “Marvel”},
	{name: “Superman”, franchise: “DC”}
];

var marvelHeroes =  heroes.filter(function(hero) {
	return hero.franchise == “Marvel”;
});
// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

// 4 ways

//Array.includes
//Array.find
//Array.indexOf
//Array.filter


const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];
alligator.includes("thick scales"); // returns true

//find method requires a function to be passed in. 
const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];
alligator.find(el => el.length < 12); // returns '4 foot tail'


const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];
alligator.indexOf("rounded snout"); // returns 3
alligator.indexOf("soft and fluffy"); // returns -1
alligator.indexOf(80); // returns 1
alligator.indexOf(80, 2); // returns -1


/*
The filter() method is like the find() method, in that it requires a function passed and a condition for what will be returned. 
The main difference is, filter() always returns an array, even if there is only one matching element. 
But it will return all the matching elements, whereas find() only returns the first matching.
*/
const alligator = ["thick scales", 80, "4 foot tail", "rounded snout", 80];
alligator.filter(el => el === 80); //returns [80, 80]


/*
The arrays in the examples here were very simple. 
You may find yourself with an array of objects. 
Here are some very basic examples below to navigate through the jungle of nested objects:
*/

const jungle = [
  { name: "frog", threat: 0 },
  { name: "monkey", threat: 5 },
  { name: "gorilla", threat: 8 },
  { name: "lion", threat: 10 }
];

// break the object down in order to use .includes() or .indexOf()
const names = jungle.map(el => el.name); // returns ['frog', 'monkey', 'gorilla', 'lion']
console.log(names.includes("gorilla")); // returns true
console.log(names.indexOf("lion")); // returns 3 - which corresponds correctly assuming no sorting was done

// methods we can do on the array of objects
console.log(jungle.find(el => el.threat == 5)); // returns object - {name: "monkey", threat: 5}
console.log(jungle.filter(el => el.threat > 5)); // returns array - [{name: "gorilla", threat: 8}, {name: 'lion', threat: 10}]

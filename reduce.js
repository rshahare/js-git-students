//https://alligator.io/js/finally-understand-reduce/


// Reduce is a method that can be difficult to understand especially with all the vague explanations that can be found on the web. 
// There are a lot of benefits to understanding reduce as it is often used in state management (think Redux).

// arr.reduce(callback, initialValue);

//BASIC method earlier
const value = 0; 
const numbers = [5, 10, 15];
for(let i = 0; i < numbers.length; i++) {
  value += numbers[i];
}



// New Method using reduce

/* this is our initial value i.e. the starting point*/
const initialValue = 0;
/* numbers array */
const numbers = [5, 10, 15];
/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
  return accumulator + item;
};
/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, initialValue)



// multi level array
const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
function flattenArray(data) {
  // our initial value this time is a blank array
  const initialValue = [];

  // call reduce on our data
  return data.reduce((total, value) => {
    // if the value is an array then recursively call reduce
    // if the value is not an array then just concat our value
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
}


// Chanaging object structure

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]

// to change
const pokemonModified = {
  charmander: { type: "fire" },
  squirtle: { type: "water" },
  bulbasaur: { type: "grass" }
};


const getMapFromArray = data =>
  data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});
getMapFromArray(pokemon)
  
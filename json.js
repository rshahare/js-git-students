// https://alligator.io/js/json-parse-stringify/
// JSON.parse() takes a JSON string and transforms it into a JavaScript object. 
// JSON.stringify() takes a JavaScript object and transforms it into a JSON string.

const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}

//And although the methods are usually used on objects, they can also be used on arrays:
const myArr = ['bacon', 'letuce', 'tomatoes'];

const myArrStr = JSON.stringify(myArr);

console.log(myArrStr);
// "["bacon","letuce","tomatoes"]"

console.log(JSON.parse(myArrStr));
// ["bacon","letuce","tomatoes"]
console.log('show all important array functions ');

// Array of Cars
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "blue",
        "type": "sedan",
        "registration": new Date('2019-07-03'),
        "capacity": 5
    },
    {
        "color": "white",
        "type": "normal",
        "registration": new Date('2016-04-03'),
        "capacity": 7
    },
];

console.log(cars);

// --- Add a new object at the start - Array.unshift
let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}

cars.unshift(car);
console.log('unshift example ', cars);

// --- Add a new object at the end - Array.push
let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}
cars.push(car);
console.log('push example ', cars);
// --- Add a new object in the middle - Array.splice
// To add an object in the middle, use Array.splice. This function is very handy as it can also remove items.
/*
Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);
*/
let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}
cars.splice(4, 0, car);
console.log('splice example ', cars);
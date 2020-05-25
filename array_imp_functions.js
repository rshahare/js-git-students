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

console.log( cars );

// Add a new object at the start - Array.unshift
let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}

cars.unshift(car);

console.log( ' unshift example ' , cars );
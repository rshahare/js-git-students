// https://alligator.io/js/spread-operator/

const foo = [
  'hello',
  'bonjour',
  'konnichiwa'
];
const bar = [...foo]; // the three dots "..." are the spread operator syntax!

console.log(bar);
// ['hello', 'bonjour', 'konnichiwa'];


const foo = [
  'hello',
  'bonjour',
  'konnichiwa'
]
const bar = [...foo];


const foo = {
  english: 'hello',
  french: 'bonjour',
  japanese: 'konnichiwa'
};
const bar = {...foo};
console.log(bar);
// { english: 'hello', french: 'bonjour', japanese: 'konnichiwa' }


const foo = ['hello', 'bonjour', 'konnichiwa'];
const bar = ['gutentag', 'hello-ey'];
const baz = [...foo, ...bar];
console.log(baz);
// ['hello', 'bonjour', 'konnichiwa', 'gutentag', 'hello-ey']


const foo = ['hello', 'bonjour', 'konnichiwa'];
const bar = [...foo, 'gutentag', 'hello-ey'];
console.log(bar);
// ['hello', 'bonjour', 'konnichiwa', 'gutentag', 'hello-ey']


const foo = {
  english: 'hello',
  french: 'bonjour',
  japanese: 'konnichiwa'
};
const bar = {
  german: 'gutentag',
  canadian: 'hello-ey'
};
const baz = {...foo, ...bar};
console.log(baz);
// { english: 'hello', french: 'bonjour', japanese: 'konnichiwa', german: 'gutentag', canadian: 'hello-ey' }



// duplicate jeys get overridden -----
const foo = {
  english: 'hello',
  french: 'bonjour',
  japanese: 'konnichiwa'
};
const bar = {
  english: 'howdy',
  german: 'gutentag'
};
const baz = {
  ...foo,
  ...bar,
  canadian: 'hello-ey',
  korean: 'annyeong'
};
console.log(baz);
// { english: 'howdy', french: 'bonjour', japanese: 'konnichiwa', german: 'gutentag', canadian: 'hello-ey', korean: 'annyeong' }




//Feeding Arguments into Functions
const cube = [12, 30, 14];
function calcVolume(width, height, depth) {
  return width * height * depth;
};
calcVolume(12, 30, 14);         // basic
calcVolume.apply(null, cube);   // using "apply"
calcVolume(...cube);          // using "spread operator"


// strings

const foo = "jumanji";
const bar = [...foo];

console.log(bar);
// [ "j", "u", "m", "a", "n", "j", "i" ]

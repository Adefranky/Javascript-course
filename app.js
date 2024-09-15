// Variables
// (reserved keyword) (variable name) (type of value)
// declare a variable
// let name;

// assign a value to the variable
// var and let allows you to change the value type as in the case of frankDev below
let banana;
banana = "fruit"
console.log("banana")

let frankDev = "mrbeast";
frankDev = "champion"
console.log(frankDev);

// using const will not allow you to change the value of the variable after declaration
const franky = "name"
console.log(franky);


// convention for writing variables
// using uppercase, lowercase, kebcase, carmelCase, snakecase


// challenge
let name = "frank";
console.log(name);
let career = "programmer";
console.log(career);
let gender = "male";
console.log(gender);
let twitterHandle = "frank254";
console.log(twitterHandle);

// Primitive types
// 1. Number
let num = 10;
console.log(num);

let float = 10.4
console.log(typeof float);

console.log(2 - 2);
console.log(2 ** 2);

let counter = 10;
counter++
console.log(counter);

counter--
console.log(counter);

// challenge
let firstFavNumber = 100;
let secondFavNumber = 80;
console.log(firstFavNumber + secondFavNumber);
console.log(firstFavNumber - secondFavNumber);
console.log(firstFavNumber * secondFavNumber);
console.log(firstFavNumber / secondFavNumber);
console.log(firstFavNumber % secondFavNumber);
console.log(firstFavNumber ** secondFavNumber);

// Booleans
let isTrue = true;
console.log(isTrue);

// falsey values
// false
// null
// undefined
// 0
// -0
// NaN
// '', "",``(empty quotes)

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumber = 100;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumber + undefined);

// comparison operators
// relational operators
// greater than, less than, graeter than or equal to, less than or equal to,

console.log(10 > 10);
console.log(10 < 50);
console.log(10 >= 10);
console.log(10 <= 10);

// Equality operators
// === strict equality(type + value)
//     !=== strict non - equality operators(type + value)
//         = lose equality operator(value)
//             != non equality opererator
console.log(10 === 10);
console.log(10 === '10');
console.log(10 !== 10);
console.log(10 !== '10');
// localStorage: returns true
// console.log(10 = 10);
// console.log(10 = '10');

// challenge
let firstFavNumb = 100;
let secondFavNumb = 80;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb = secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

// strings
let firstName = 'elias  '
let secondName = 'alakala'
let thirdName = `wafula`
console.log(firstName);
console.log(secondName);
console.log(thirdName);

// string Concatenation
let fullName = firstName + secondName;
console.log(fullName);

// or

let myName = firstName.concat(secondName);
console.log(myName);

// append
firstName += "champion"

console.log(firstName);

// length
console.log(firstName.length);

// cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// slice
console.log(firstName.slice(0, 10));

// split and join methods
console.log(firstName.split('').join(''));

// includes
console.log(firstName.includes('w'));

// trim: removes the spaces

console.log(firstName.trim(''));


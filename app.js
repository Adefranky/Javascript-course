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

// back ticks
let nameOne = "frank"
let nameTwo = "dev"
let allNmaes = `${nameOne} ${nameTwo}`;
console.log(allNmaes);

// challenge
let favActorFirstName = "Obinna";
console.log(favActorFirstName);
let favActorLastName = "Oga";
let twoNames = favActorFirstName + " " + favActorLastName;
console.log(twoNames);
let uppercase = twoNames.toUpperCase();
console.log(uppercase);
let message = `my favourite Actor is ${uppercase}, he is the best`;
message += "his best show is silicon valley";
console.log(message);

// type conversion
let money = "50";

// converting String to Number
money = parseInt(money);
console.log(money);
console.log(typeof money);

money = +money;
console.log(money);
console.log(typeof money);

money = Number(money);
console.log(money);
console.log(typeof money);

// converting number to string
let cash = 80;
cash = cash.toString();
console.log(cash)
console.log(typeof cash);
cash = String(cash);
console.log(cash);
console.log(typeof cash);

// converting string to decimal
let mone = "50.254";
mone = parseFloat(mone);
console.log(mone);
console.log(typeof mone);

// controll flow
// if ===money
// buy some stuff
// else !===money
// bring some money dude

// if (condition) {...}
// else if (condition) {...}
// else {}

// conditional statements

let a = 20;
let b = 20;
if (a > b) {
    console.log("a is greater than b")
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log('a is equal to b')
}

let time = 10;
let greetings;
if (time < 10) {
    console.log(greetings)

} else if (time < 20) {
    greetings = "good day";

    console.log(greetings);

} else {
    greetings = "good evening";
    console.log(greetings);
}


// Challenge
let password;
if (password === 8) {
    // password = "welcome";
    console.log("welcome");
} else if (password <= 8) {

    console.log("password is too short");
} else if (password >= 8) {

    console.log("too long password password");
    console.log("should be 8 characters");
} else {

    console.log("please provide a password");
}

// switch statements
// switch (expression) {
//     case x:
//         print
//         break;
//     case y:
//         print
//         break;

// }

let x = 0
let bulb;

switch (x) {
    case 0:
        bulb = "off";
        console.log(bulb);
        break;
    case 1:
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "no value found";
        console.log(bulb);
}


let day = 'monday'

switch (day) {
    case 'monday':
        console.log('today is monday')
        break;
    case 'tuesday':
        console.log('today is tuesday')
        break;
    case 'wednesday':
        console.log('today is wednesday')
        break;
    case 'thursday':
        console.log('today is thursday')
        break;
    case 'saturday':
        console.log('today is saturday')
        break;
    case 'sunday':
        console.log('today is sunday')
        break;
    default:
        console.log('no day to choose');



}

// challenge
let fruit = "banana";

switch (fruit) {
    case 'banana':
        console.log('banana is good')
        break;
    case 'orange':
        console.log('i ma not a fan of orange')
        break;
    case 'apple':
        console.log('how you like them apples')
        break;
    default:
        console.log('i have never heard of that fruit');
}

// for loops in js
// for(initialExpression; condition; incremental expression) {}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let i = 0; i <= 5; i++) {
    console.log('Hello world', i);
}

// nested loop
for (let i = 1; i < - 5; i++) {
    console.log('---Outr Loop', i)
    // nested loop
    for (let j = 1; j <= 5; j++) {
        console.log(" ---inner loop--, j")
    }
}

// challenge
for (let i = 0; i <= 10; i++) {
    console.log('Franky', i)
}

// while loop
// while (condition){
// code blockto be executed}

let i = 1
while (i <= 5) {
    console.log('Hello world', i);
    i++;
}

// challenge
let j = 10;
while (j <= 10) {
    console.log("Frankelias", j);
    j++;
}

// do while loop
let l = 1;
do {
    console.log("hello world", l)
    l++;
}
while (
    l <= 5
);

// challenge
let k = 20;
do {
    console.log("Elias", k);
    k++;

} while (k <= 25);

// logical operators
// logical AND(&&) - TRUE if all the operators are true

const e = true;
const f = true;
const g = 4;
console.log(e && f);
console.log(g > 2 && g < 2)



// logical OR(||) - TRUE if either of the operators is true

console.log(e || f);
console.log(f || f);
console.log(g > 2 || g < 2);
//     logical NOT(!) - TRUE if the operands are false
console.log(!e);
console.log(!f);


let secret = "frankyDev"
if (secret >= 8 && secret.includes('Dev')) {
    console.log('valid')
} else {
    console.log('invalid password')
}

if (secret >= 8 || secret.includes("Dev")) {
    console.log('valid')
} else {
    console.log('inalid password')
}

// Arrays - 0 index based
let fruits = [];
console.log(fruits);
const numbers = [1, 2, 3, 4, 6];
console.log(numbers);

const stringArray = ['eat', 'sleep', 'code', 'repeat'];
console.log(stringArray);

// Accessing items from an array
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);
console.log(stringArray[4]);

//Two Dimension Array/ nested array - array inside another aray
const nestArray = ["one", ["two", "three"], 1, 2, true, false];
console.log(nestArray);
console.log(nestArray[1]);

const myLetters = ['h', 'e', 'l', 'l', 'o'];
console.log(myLetters);

// challenge
const favSingers = ["Obinna", "jose", "Konea"];
console.log(favSingers[2]);

const favnumbers = [1, 2, 3, 4];
console.log(favnumbers);

const mixedArr = ["loice"["almer"], 123, true];
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);




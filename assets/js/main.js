// LvL1_3 - data-types

let i = 1;
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof i); //number
console.log(typeof lastName); //string
console.log(typeof j); //string
console.log(typeof status); //boolean
console.log(typeof hello); //string
console.log(typeof helloWorld); //string

// LvL1_4 -
console.log(typeof "John"); //string
console.log(typeof 3.14); //number
console.log(typeof NaN); //number
console.log(typeof false); //boolean
console.log(typeof [1, 2, 3, 4]); //object
console.log(typeof { name: "John", age: 34 }); //object
console.log(typeof new Date()); //object
console.log(typeof function () {}); //function
console.log(typeof null); //object
console.log(typeof ""); //string
console.log(typeof (3 + 2 == 5)); //boolean
console.log(typeof (3 + "3")); //string

let x = 20;
let y = 30;
let z = 10;

console.log(x + y); // 50
console.log(x - y); // -10
console.log(x * y); // 600
console.log(x / y); // 0.6666666666666666
resultOne = (x * y) / z;
console.log(resultOne); // 60

// LvL1_4 Teil2

let a = 15;
let b = 9;
let c = 20;
console.log(a % b); // 6
resultTwo = (a + b) * c;
console.log(resultTwo); //480

console.log(a++);
console.log(b--);

console.log(resultOne % resultTwo);

// LvL1_14

console.log(Boolean(100)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(-15)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true
console.log(Boolean(1 + 7 + 3.14)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false

// LvL1_15

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum); // false
console.log(num > anotherNum); // false
console.log(num < anotherNum); // true
console.log(num >= anotherNum); // false
console.log(num <= anotherNum); // true

console.log(num == "5"); // true
console.log(num != 8); // true
console.log(num != "5"); // false

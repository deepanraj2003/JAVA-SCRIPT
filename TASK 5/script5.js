// =====================================================
// JAVASCRIPT ASSIGNMENT - SCRIPT4.JS
// =====================================================


// =====================================================
// 🟢 TASK 1 – Difference Between var, let and const
// =====================================================

console.log("========== TASK 1 ==========");

var name = "Deepanraj";
var name = "Deepanraj";

let age = 22;

const city = "Chennai";

console.log(name);
console.log(age);
console.log(city);


// =====================================================
// 🟢 TASK 2 – Re-declaration with var, let and const
// =====================================================

console.log("========== TASK 2 ==========");

var name1 = "Deepanraj";
var name1 = "Deepanraj";

let age1 = 22;
// let age1 = 23; // Error

const city1 = "Chennai";
// const city1 = "Madurai"; // Error

console.log(name1);
console.log(age1);
console.log(city1);


// =====================================================
// 🟢 TASK 3 – Output of var, let and const
// =====================================================

console.log("========== TASK 3 ==========");

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

// Output:
// TypeError: Assignment to constant variable.


// =====================================================
// 🟢 TASK 4 – Declaration and Initialization
// =====================================================

console.log("========== TASK 4 ==========");

let name2;
name2 = "Deepanraj";

let age2 = 22;

console.log(name2);
console.log(age2);


// =====================================================
// 🟢 TASK 5 – Undefined Variable
// =====================================================

console.log("========== TASK 5 ==========");

let a;

console.log(a);

// Output:
// undefined


// =====================================================
// 🟢 TASK 6 – Hoisting
// =====================================================

console.log("========== TASK 6 ==========");

console.log(hoistedValue);

var hoistedValue = 10;

// Output:
// undefined


// =====================================================
// 🟢 TASK 7 – null vs undefined
// =====================================================

console.log("========== TASK 7 ==========");

let value1 = null;
let value2;

console.log(value1);
console.log(value2);

// Output:
// null
// undefined


// =====================================================
// 🟢 TASK 8 – typeof Operator
// =====================================================

console.log("========== TASK 8 ==========");

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object


// =====================================================
// 🟢 TASK 9 – == vs ===
// =====================================================

console.log("========== TASK 9 ==========");

console.log(5 == "5");
console.log(5 === "5");

// Output:
// true
// false


// =====================================================
// 🟢 TASK 10 – ++i vs i++
// =====================================================

console.log("========== TASK 10 ==========");

let i = 5;

console.log(++i);

let j = 5;

console.log(j++);
console.log(j);

let k = 5;

console.log(k++);
console.log(k);

// Output:
// 6
// 5
// 6
// 5
// 6


// =====================================================
// 🟢 TASK 11 – Arithmetic Operators
// =====================================================

console.log("========== TASK 11 ==========");

let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Output:
// 105
// 5
// 50
// 2


// =====================================================
// 🟢 TASK 12 – Logical Operators
// =====================================================

console.log("========== TASK 12 ==========");

let p = true;
let q = false;

console.log(p && q);
console.log(p || q);
console.log(!p);

// Output:
// false
// true
// false


// =====================================================
// 🟢 TASK 13 – Logical Expression Output
// =====================================================

console.log("========== TASK 13 ==========");

console.log(true && true);
console.log(true || false);
console.log(false && true);

// Output:
// true
// true
// false


// =====================================================
// 🟢 TASK 14 – Ternary Operator
// =====================================================

console.log("========== TASK 14 ==========");

let age3 = 22;

let result = age3 >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult


// =====================================================
// 🟢 TASK 15 – Implicit and Explicit Type Casting
// =====================================================

console.log("========== TASK 15 ==========");

let result1 = "10" - 5;

console.log(result1);

let result2 = Number("100");

console.log(result2);

// Output:
// 5
// 100


// =====================================================
// 🟢 TASK 16 – Type Casting Examples
// =====================================================

console.log("========== TASK 16 ==========");

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// =====================================================
// 🟢 TASK 17 – NaN
// =====================================================

console.log("========== TASK 17 ==========");

let numberValue = Number("hello");

console.log(numberValue);
console.log(Number.isNaN(numberValue));

// Output:
// NaN
// true


// =====================================================
// 🟢 TASK 18 – if-else vs switch
// =====================================================

console.log("========== TASK 18 ==========");

let age4 = 22;

if (age4 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// Output:
// Adult
// Tuesday


// =====================================================
// 🟢 TASK 19 – Check Adult or Minor
// =====================================================

console.log("========== TASK 19 ==========");

let age5 = 22;

if (age5 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult


// =====================================================
// 🟢 TASK 20 – Nested if
// =====================================================

console.log("========== TASK 20 ==========");

let age6 = 22;
let hasID = true;

if (age6 >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Entry not allowed");
}

// Output:
// Entry allowed


// =====================================================
// 🟢 TASK 21 – Even or Odd Using Ternary Operator
// =====================================================

console.log("========== TASK 21 ==========");

let number1 = 10;

let evenOdd = number1 % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);

// Output:
// Even


// =====================================================
// 🟢 TASK 22 – while vs do-while
// =====================================================

console.log("========== TASK 22 ==========");

let count1 = 1;

while (count1 <= 3) {
    console.log(count1);
    count1++;
}

let count2 = 1;

do {
    console.log(count2);
    count2++;
} while (count2 <= 3);

// Output:
// 1
// 2
// 3
// 1
// 2
// 3


// =====================================================
// 🟢 TASK 23 – For Loop 1 to 5
// =====================================================

console.log("========== TASK 23 ==========");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// =====================================================
// 🟢 TASK 24 – for-of vs for-in
// =====================================================

console.log("========== TASK 24 ==========");

let friends = [
    "Samantha",
    "Rashmika",
    "Smirthi",
    "Ayeesha"
];

for (let friend of friends) {
    console.log(friend);
}

for (let index in friends) {
    console.log(index);
}

// Output:
// Samantha
// Rashmika
// Smirthi
// Ayeesha
// 0
// 1
// 2
// 3


// =====================================================
// 🟢 TASK 25 – Sum of Numbers 1 to 100
// =====================================================

console.log("========== TASK 25 ==========");

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Output:
// 5050


// =====================================================
// 🟢 TASK 26 – slice vs splice
// =====================================================

console.log("========== TASK 26 ==========");

let numbers = [1, 2, 3, 4, 5];

let slicedArray = numbers.slice(1, 4);

console.log(slicedArray);

let splicedArray = [1, 2, 3, 4, 5];

splicedArray.splice(1, 2);

console.log(splicedArray);

// Output:
// [2, 3, 4]
// [1, 4, 5]


// =====================================================
// 🟢 TASK 27 – push, pop, unshift and shift
// =====================================================

console.log("========== TASK 27 ==========");

let array = [2, 3];

array.push(4);
console.log(array);

array.pop();
console.log(array);

array.unshift(1);
console.log(array);

array.shift();
console.log(array);

// Output:
// [2, 3, 4]
// [2, 3]
// [1, 2, 3]
// [2, 3]


// =====================================================
// 🟢 TASK 28 – Function Declaration vs Function Expression
// =====================================================

console.log("========== TASK 28 ==========");

function greetPerson() {
    return "Hello Deepanraj";
}

const greetPerson2 = function () {
    return "Hello Deepanraj";
};

console.log(greetPerson());
console.log(greetPerson2());

// Output:
// Hello Deepanraj
// Hello Deepanraj


// =====================================================
// 🟢 TASK 29 – Arrow Function
// =====================================================

console.log("========== TASK 29 ==========");

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Output:
// 30


// =====================================================
// 🟢 TASK 30 – Function Returning Hello
// =====================================================

console.log("========== TASK 30 ==========");

function greet() {
    return "Hello Deepanraj";
}

console.log(greet());

// Output:
// Hello Deepanraj
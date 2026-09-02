// ======================================================
// JAVASCRIPT ASSIGNMENT - SCRIPT2.JS
// ======================================================


// ======================================================
// 🟢 TASK 1 — var, let, const
// ======================================================

console.log("========== TASK 1 ==========");

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// Change var value
studentName = "Arun";
console.log("Changed Student Name:", studentName);

// Change let value
studentAge = 23;
console.log("Changed Student Age:", studentAge);

// Try changing const
// Uncomment the next line to see the error
// collegeName = "XYZ College";

// Redeclaring var - allowed
var studentName = "Kumar";
console.log("Redeclared var Student Name:", studentName);

// Redeclaring let - NOT allowed
// Uncomment the next line to see the error
// let studentAge = 25;


// ======================================================
// 🟢 TASK 2 — User Information
// ======================================================

console.log("========== TASK 2 ==========");

let userName = prompt("Task 2 - Enter your name:");
let userAge = prompt("Task 2 - Enter your age:");
let userCity = prompt("Task 2 - Enter your city:");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);


// ======================================================
// 🟢 TASK 3 — Welcome Message
// ======================================================

console.log("========== TASK 3 ==========");

let welcomeName = prompt("Task 3 - Enter your name:");

alert("Welcome " + welcomeName + "!");


// ======================================================
// 🟢 TASK 4 — Age Calculator
// ======================================================

console.log("========== TASK 4 ==========");

let birthYear = prompt("Task 4 - Enter your birth year:");

let currentYear = 2026;

let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);


// ======================================================
// 🔵 TASK 5 — Identify Data Types
// ======================================================

console.log("========== TASK 5 ==========");

let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6;
let value7 = null;

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);
console.log(value6, typeof value6);
console.log(value7, typeof value7);


// ======================================================
// 🔵 TASK 6 — Student Data
// ======================================================

console.log("========== TASK 6 ==========");

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.E",
    isStudent: true
};

console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("Is Student:", student.isStudent);


// ======================================================
// 🔵 TASK 7 — Fruit Array
// ======================================================

console.log("========== TASK 7 ==========");

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);


// ======================================================
// 🟡 TASK 8 — Basic Calculator
// ======================================================

console.log("========== TASK 8 ==========");

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// ======================================================
// 🟡 TASK 9 — Shopping Bill
// ======================================================

console.log("========== TASK 9 ==========");

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", totalPrice);


// ======================================================
// 🟡 TASK 10 — Simple Marks Calculation
// ======================================================

console.log("========== TASK 10 ==========");

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// ======================================================
// 🟠 TASK 11 — Post Increment
// ======================================================

console.log("========== TASK 11 ==========");

let postIncrementA = 10;

let postIncrementB = postIncrementA++;

console.log("a:", postIncrementA);
console.log("b:", postIncrementB);


// ======================================================
// 🟠 TASK 12 — Pre Increment
// ======================================================

console.log("========== TASK 12 ==========");

let preIncrementA = 10;

let preIncrementB = ++preIncrementA;

console.log("a:", preIncrementA);
console.log("b:", preIncrementB);


// ======================================================
// 🟠 TASK 13 — Post Decrement
// ======================================================

console.log("========== TASK 13 ==========");

let postDecrementA = 20;

let postDecrementB = postDecrementA--;

console.log("a:", postDecrementA);
console.log("b:", postDecrementB);


// ======================================================
// 🟠 TASK 14 — Pre Decrement
// ======================================================

console.log("========== TASK 14 ==========");

let preDecrementA = 20;

let preDecrementB = --preDecrementA;

console.log("a:", preDecrementA);
console.log("b:", preDecrementB);


// ======================================================
// 🔴 TASK 15 — Find the Final Values
// ======================================================

console.log("========== TASK 15 ==========");

let challengeA = 5;

let challengeB = challengeA++;

let challengeC = ++challengeA;

let challengeD = challengeB--;

console.log("a:", challengeA);
console.log("b:", challengeB);
console.log("c:", challengeC);
console.log("d:", challengeD);


// ======================================================
// 🟢 TASK 16 — Assignment Operators
// ======================================================

console.log("========== TASK 16 ==========");

// +=
let num1 = 10;
num1 += 5;
console.log("After += :", num1);

// -=
let num2 = 10;
num2 -= 5;
console.log("After -= :", num2);

// *=
let num3 = 10;
num3 *= 5;
console.log("After *= :", num3);

// /=
let num4 = 10;
num4 /= 5;
console.log("After /= :", num4);

// %=
let num5 = 10;
num5 %= 3;
console.log("After %= :", num5);

// **=
let num6 = 10;
num6 **= 2;
console.log("After **= :", num6);


// ======================================================
// 🏆 TASK 17 — Mini Student Profile
// ======================================================

console.log("========== TASK 17 ==========");

let profileName = "Naveen";
let profileAge = 22;
let profileCity = "Trichy";
let profileCollege = "ABC College";

let favoriteSubjects = [
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "SQL"
];

let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: favoriteSubjects,
    isStudent: true
};

console.log("Student Name:", profileName);
console.log("Student Age:", profileAge);
console.log("City:", profileCity);
console.log("College:", profileCollege);
console.log("First Subject:", favoriteSubjects[0]);
console.log(
    "Last Subject:",
    favoriteSubjects[favoriteSubjects.length - 1]
);
console.log("Total Subjects:", favoriteSubjects.length);
console.log("Complete Object:", studentProfile);


// ======================================================
// 🔥 FINAL CHALLENGE — User + Calculator
// ======================================================

console.log("========== FINAL CHALLENGE ==========");

let firstNumber = prompt("Final Challenge - Enter first number:");
let secondNumber = prompt("Final Challenge - Enter second number:");

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);


// ======================================================
// END OF ASSIGNMENT
// ======================================================

console.log("========== ALL TASKS COMPLETED ==========");


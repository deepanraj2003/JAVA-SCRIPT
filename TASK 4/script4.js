// ======================================================
// JAVASCRIPT ASSIGNMENT - SCRIPT4.JS
// ======================================================


// ======================================================
// 🟢 TASK 1 — For Loop 1 to 10
// ======================================================

console.log("========== TASK 1 ==========");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ======================================================
// 🟢 TASK 2 — Reverse 10 to 1
// ======================================================

console.log("========== TASK 2 ==========");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ======================================================
// 🟢 TASK 3 — Even Numbers 1 to 20
// ======================================================

console.log("========== TASK 3 ==========");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ======================================================
// 🟢 TASK 4 — Odd Numbers 1 to 20
// ======================================================

console.log("========== TASK 4 ==========");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// ======================================================
// 🟢 TASK 5 — Multiplication Table
// ======================================================

console.log("========== TASK 5 ==========");

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// ======================================================
// 🟢 TASK 6 — While Countdown 10 to 1
// ======================================================

console.log("========== TASK 6 ==========");

{
    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }
}


// ======================================================
// 🟢 TASK 7 — Sum 1 to 10
// ======================================================

console.log("========== TASK 7 ==========");

{
    let i = 1;
    let sum = 0;

    while (i <= 10) {
        sum = sum + i;
        i++;
    }

    console.log(sum);
}


// ======================================================
// 🟢 TASK 8 — do...while 1 to 5
// ======================================================

console.log("========== TASK 8 ==========");

{
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5);
}


// ======================================================
// 🟢 TASK 9 — do...while Understanding
// ======================================================

console.log("========== TASK 9 ==========");

{
    let a = 10;

    do {
        console.log(a);
        a++;
    } while (a <= 5);
}


// ======================================================
// 🟢 TASK 10 — for...of String
// ======================================================

console.log("========== TASK 10 ==========");

let language = "javascript";

for (let character of language) {
    console.log(character);
}


// ======================================================
// 🟢 TASK 11 — for...of Array
// ======================================================

console.log("========== TASK 11 ==========");

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes"
];

for (let fruit of fruits) {
    console.log(fruit);
}


// ======================================================
// 🟢 TASK 12 — for...of Student Names
// ======================================================

console.log("========== TASK 12 ==========");

let students = [
    "Samantha",
    "Rashmika",
    "Smirthi",
    "Ayeesha"
];

for (let student of students) {
    console.log(student);
}


// ======================================================
// 🟢 TASK 13 — for...in Employee Object
// ======================================================

console.log("========== TASK 13 ==========");

let employee = {
    name: "Deepanraj",
    age: 22,
    qualification: "B.E CSE",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key + " " + employee[key]);
}


// ======================================================
// 🟢 TASK 14 — for...in Product Object
// ======================================================

console.log("========== TASK 14 ==========");

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key + " " + product[key]);
}


// ======================================================
// 🟢 TASK 15 — Simple Function
// ======================================================

console.log("========== TASK 15 ==========");

function welcome() {
    console.log("Welcome");
}

welcome();
welcome();
welcome();


// ======================================================
// 🟢 TASK 16 — Function with Parameter
// ======================================================

console.log("========== TASK 16 ==========");

function greet(name) {
    console.log("Hello " + name);
}

greet("Samantha");
greet("Rashmika");
greet("Smirthi");


// ======================================================
// 🟢 TASK 17 — Student Function
// ======================================================

console.log("========== TASK 17 ==========");

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Deepanraj", 22, "B.E CSE");
student("Samantha", 22, "CSE");
student("Rashmika", 22, "CSE");


// ======================================================
// 🟢 TASK 18 — Add Function
// ======================================================

console.log("========== TASK 18 ==========");

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ======================================================
// 🟢 TASK 19 — Salary Function
// ======================================================

console.log("========== TASK 19 ==========");

{
    function salary(amount) {
        return amount;
    }

    let result = salary(50000);

    console.log(result);
}


// ======================================================
// 🟢 TASK 20 — Bonus Function
// ======================================================

console.log("========== TASK 20 ==========");

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log(total);


// ======================================================
// 🟢 TASK 21 — Default Parameter
// ======================================================

console.log("========== TASK 21 ==========");

{
    function employeeDetails(name, role = "Developer") {
        console.log("Name: " + name);
        console.log("Role: " + role);
    }

    employeeDetails("Deepanraj");
    employeeDetails("Samantha", "Designer");
}


// ======================================================
// 🟢 TASK 22 — Square Function
// ======================================================

console.log("========== TASK 22 ==========");

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(7));


// ======================================================
// 🟢 TASK 23 — Anonymous Function
// ======================================================

console.log("========== TASK 23 ==========");

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// ======================================================
// 🟢 TASK 24 — Arrow Function
// ======================================================

console.log("========== TASK 24 ==========");

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 20));


// ======================================================
// 🟢 TASK 25 — Scope
// ======================================================

console.log("========== TASK 25 ==========");

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
}

test();


// ======================================================
// 🟢 TASK 26 — Hoisting var
// ======================================================

console.log("========== TASK 26 ==========");

function task26() {

    console.log(a);

    var a = 10;
}

task26();


// ======================================================
// 🟢 TASK 27 — Hoisting let
// ======================================================

console.log("========== TASK 27 ==========");

function task27() {

    // console.log(b);
    // let b = 20;

}

task27();


// ======================================================
// 🟢 TASK 28 — Hoisting const
// ======================================================

console.log("========== TASK 28 ==========");

function task28() {

    // console.log(c);
    // const c = 30;

}

task28();


// ======================================================
// 🟢 TASK 29 — IIFE
// ======================================================

console.log("========== TASK 29 ==========");

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


// ======================================================
// 🟢 TASK 30 — Callback / Higher Order Function
// ======================================================

console.log("========== TASK 30 ==========");

function callbackWelcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(callbackWelcome);


// ======================================================
// 🟢 TASK 31 — Generator Function
// ======================================================

console.log("========== TASK 31 ==========");

{
    function* cashback() {
        yield "10% cashback";
        yield "20% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    let result = cashback();

    for (let value of result) {
        console.log(value);
    }
}


// ======================================================
// 🟢 TASK 32 — Employee Management Console
// ======================================================

console.log("========== TASK 32 ==========");

let employees = [

    {
        name: "Deepanraj",
        age: 22,
        department: "CSE",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Samantha",
        age: 22,
        department: "CSE",
        role: "Designer",
        salary: 35000
    },

    {
        name: "Rashmika",
        age: 22,
        department: "CSE",
        role: "Tester",
        salary: 45000
    },

    {
        name: "Smirthi",
        age: 22,
        department: "CSE",
        role: "Developer",
        salary: 50000
    },

    {
        name: "Ayeesha",
        age: 22,
        department: "CSE",
        role: "Tester",
        salary: 38000
    }

];


// 1. for...of

for (let employee of employees) {

    console.log(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 2. for...in

for (let employee of employees) {

    for (let key in employee) {

        console.log(key + " " + employee[key]);

    }

}


// 3. Display Employee Function

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}


// 4. Display Every Employee

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 5. Get Salary

function getSalary(employee) {

    return employee.salary;

}

for (let employee of employees) {

    console.log(
        employee.name,
        getSalary(employee)
    );

}


// 6. Salary Condition

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " earns 40000 or more"
        );

    } else {

        console.log(
            employee.name + " earns below 40000"
        );

    }

}


// 7. Arrow Function

let calculateBonus = (salary, bonus) => salary + bonus;

console.log(calculateBonus(40000, 5000));


// 8. Generator Function

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {

    console.log(benefit);

}


// ======================================================
// END
// ======================================================
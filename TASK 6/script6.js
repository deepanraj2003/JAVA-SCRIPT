// ======================================================
// JAVASCRIPT ASSIGNMENT - SCRIPT6.JS
// ======================================================


// ======================================================
// 🟢 TASK 1 — STUDENT RESULT ANALYZER
// ======================================================

console.log("========== TASK 1 ==========");

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {

        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        }

    } else {

        result = "Fail";
        grade = "Fail";

    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Deepanraj", "B.E CSE", 85, 90, 78, 88, 92);


// ======================================================

// 🟢 TASK 2 — EMPLOYEE SALARY CALCULATOR

// ======================================================

console.log("========== TASK 2 ==========");

let employee = {
    name: "Deepanraj",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// ======================================================

// 🟢 TASK 3 — PRODUCT FILTER SYSTEM

// ======================================================

console.log("========== TASK 3 ==========");

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let above2000 = products.filter(
    product => product.price > 2000
);

console.log("Products above ₹2000:", above2000);

let electronics = products.filter(
    product => product.category === "electronics"
);

console.log("Electronics:", electronics);

let below1000 = products.find(
    product => product.price < 1000
);

console.log("First product below ₹1000:", below1000);

let totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price:", totalPrice);

let moreThan50000 = products.some(
    product => product.price > 50000
);

console.log("Any product above ₹50000:", moreThan50000);

let everyAbove500 = products.every(
    product => product.price > 500
);

console.log("Every product above ₹500:", everyAbove500);


// ======================================================

// 🟢 TASK 4 — EMPLOYEE MANAGEMENT

// ======================================================

console.log("========== TASK 4 ==========");

let employees = [
    {
        id: 101,
        name: "Deepanraj",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Samantha",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Rashmika",
        role: "HR Manager",
        salary: 45000
    },
    {
        id: 104,
        name: "Smirthi",
        role: "UI Designer",
        salary: 35000
    },
    {
        id: 105,
        name: "Ayeesha",
        role: "Software Engineer",
        salary: 60000
    },
    {
        id: 106,
        name: "Deepanraj",
        role: "Project Manager",
        salary: 70000
    }
];

let names = employees.map(
    employee => employee.name
);

console.log("Employee Names:", names);

let above40000 = employees.filter(
    employee => employee.salary > 40000
);

console.log("Employees above ₹40000:", above40000);

let employee103 = employees.find(
    employee => employee.id === 103
);

console.log("Employee ID 103:", employee103);

let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalSalary);

let highestPaid = employees.reduce(
    (highest, employee) => {

        return employee.salary > highest.salary
            ? employee
            : highest;

    }
);

console.log("Highest Paid Employee:", highestPaid);

let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High to Low:", sortedEmployees);

let employeeNames = employees.map(
    employee => employee.name
);

console.log("Names Only:", employeeNames);


// ======================================================

// 🟢 TASK 5 — SHOPPING CART

// ======================================================

console.log("========== TASK 5 ==========");

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let totalCartValue = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);


// ======================================================

// 🟢 TASK 6 — STUDENT SEARCH SYSTEM

// ======================================================

console.log("========== TASK 6 ==========");

let students = [
    { name: "Deepanraj", age: 22, mark: 85 },
    { name: "Samantha", age: 22, mark: 92 },
    { name: "Rashmika", age: 22, mark: 67 },
    { name: "Smirthi", age: 22, mark: 45 }
];

let studentNames = students.map(
    student => student.name
);

console.log("Student Names:", studentNames);

let above80 = students.filter(
    student => student.mark > 80
);

console.log("Above 80:", above80);

let samantha = students.find(
    student => student.name === "Samantha"
);

console.log("Samantha:", samantha);

let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);

let anyoneFailed = students.some(
    student => student.mark < 50
);

console.log("Anyone Failed:", anyoneFailed);

let everyoneAbove40 = students.every(
    student => student.mark > 40
);

console.log("Everyone above 40:", everyoneAbove40);

let sortedStudents = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students Sorted by Marks:", sortedStudents);


// ======================================================

// 🟢 TASK 7 — ARRAY TRANSFORMATION CHALLENGE

// ======================================================

console.log("========== TASK 7 ==========");

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubled = numbers.map(
    number => number * 2
);

console.log("Doubled:", doubled);

let evenNumbers = numbers.filter(
    number => number % 2 === 0
);

console.log("Even Numbers:", evenNumbers);

let greaterThan15 = numbers.filter(
    number => number > 15
);

console.log("Greater than 15:", greaterThan15);

let firstGreater20 = numbers.find(
    number => number > 20
);

console.log("First number greater than 20:", firstGreater20);

let total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log("Total:", total);

let anyGreater40 = numbers.some(
    number => number > 40
);

console.log("Any greater than 40:", anyGreater40);

let allPositive = numbers.every(
    number => number > 0
);

console.log("Every number positive:", allPositive);

let descending = [...numbers].sort(
    (a, b) => b - a
);

console.log("Highest to Lowest:", descending);


// ======================================================

// 🟢 TASK 8 — STRING ANALYZER

// ======================================================

console.log("========== TASK 8 ==========");

let sentence = prompt("Enter a sentence:");

console.log("Original Sentence:", sentence);

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);

console.log(
    "First Character:",
    sentence[0]
);

console.log(
    "Last Character:",
    sentence[sentence.length - 1]
);

let words = sentence.trim().split(/\s+/);

console.log("Number of Words:", words.length);

console.log(
    "After Replace:",
    sentence.replace("JavaScript", "Python")
);

console.log(
    "Sentence Array:",
    sentence.split(" ")
);


// ======================================================

// 🔥 FINAL MINI PROJECT — EMPLOYEE DASHBOARD

// ======================================================

console.log("========== FINAL MINI PROJECT ==========");

let dashboardEmployees = [
    {
        id: 101,
        name: "Deepanraj",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Samantha",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Rashmika",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// ======================================================

// 1. EMPLOYEE LIST

// ======================================================

console.log("----- EMPLOYEE LIST -----");

dashboardEmployees.forEach(employee => {

    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );

});


// ======================================================

// 2. SEARCH EMPLOYEE BY NAME

// ======================================================

let searchName = "Deepanraj";

let searchedEmployee = dashboardEmployees.find(
    employee => employee.name === searchName
);

console.log("----- SEARCH -----");
console.log(searchedEmployee);


// ======================================================

// 3. DEPARTMENT FILTER

// ======================================================

let department = "IT";

let departmentEmployees = dashboardEmployees.filter(
    employee => employee.department === department
);

console.log("----- IT EMPLOYEES -----");
console.log(departmentEmployees);


// ======================================================

// 4. SALARY FILTER

// ======================================================

let highSalaryEmployees = dashboardEmployees.filter(
    employee => employee.salary > 50000
);

console.log("----- SALARY ABOVE ₹50000 -----");
console.log(highSalaryEmployees);


// ======================================================

// 5. TOTAL COMPANY SALARY

// ======================================================

let totalCompanySalary = dashboardEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("----- TOTAL SALARY -----");
console.log("Total Salary:", totalCompanySalary);


// ======================================================

// 6. HIGHEST SALARY

// ======================================================

let highestSalary = dashboardEmployees.reduce(
    (highest, employee) => {

        return employee.salary > highest.salary
            ? employee
            : highest;

    }
);

console.log("----- HIGHEST SALARY -----");
console.log(highestSalary);


// ======================================================

// 7. EXPERIENCE ABOVE 3 YEARS

// ======================================================

let experiencedEmployees = dashboardEmployees.filter(
    employee => employee.experience > 3
);

console.log("----- EXPERIENCE ABOVE 3 YEARS -----");
console.log(experiencedEmployees);


// ======================================================

// 8. SORTING

// ======================================================

let lowToHigh = [...dashboardEmployees].sort(
    (a, b) => a.salary - b.salary
);

console.log("----- SALARY LOW TO HIGH -----");
console.log(lowToHigh);

let highToLow = [...dashboardEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("----- SALARY HIGH TO LOW -----");
console.log(highToLow);


// ======================================================

// 9. STATISTICS

// ======================================================

let averageSalary =
    totalCompanySalary / dashboardEmployees.length;

console.log("----- STATISTICS -----");
console.log("Total Employees:", dashboardEmployees.length);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));

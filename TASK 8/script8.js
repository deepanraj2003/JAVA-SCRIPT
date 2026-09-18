// ==========================================
// JAVASCRIPT ASSIGNMENT - SCRIPT8.JS
// Employee Management System
// ==========================================

// API URL
const API_URL = "https://dummyjson.com/users";

// Main employee array
let employees = [];

// Current filters
let currentDepartment = "All";
let currentSearch = "";

// DOM elements
const employeeContainer = document.getElementById("employeeContainer");
const employeeCount = document.getElementById("employeeCount");
const totalSalary = document.getElementById("totalSalary");
const averageSalary = document.getElementById("averageSalary");
const highestPaid = document.getElementById("highestPaid");
const statusMessage = document.getElementById("statusMessage");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sortSelect = document.getElementById("sortSelect");

const employeeForm = document.getElementById("employeeForm");


// ==========================================
// 🟢 TASK 1 — FETCH EMPLOYEES
// ==========================================

function fetchEmployees() {

    statusMessage.textContent = "Loading employees...";

    fetch(API_URL)

        // Promise
        .then(response => {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            // Convert response to JSON
            return response.json();
        })

        .then(data => {

            // Store users inside array
            employees = data.users.map(user => {

                // Destructuring
                const {
                    id,
                    firstName,
                    lastName,
                    age,
                    email,
                    phone,
                    image,
                    company
                } = user;

                // Convert API departments to project departments
                const department = convertDepartment(
                    company.department
                );

                return {
                    id: id,
                    name: `${firstName} ${lastName}`,
                    age: age,
                    email: email,
                    phone: phone,
                    department: department,
                    image: image,

                    // API employees don't contain salary.
                    salary: 0
                };
            });

            statusMessage.textContent =
                "Employee data loaded successfully.";

            displayEmployees();
        })

        .catch(error => {

            console.error(error);

            statusMessage.textContent =
                "Unable to load employee data. Please try again.";

            statusMessage.style.background = "#fee2e2";
            statusMessage.style.color = "#991b1b";
        })

        .finally(() => {

            console.log("API request completed.");

            // Small demo delay
            setTimeout(() => {
                statusMessage.style.opacity = "1";
            }, 500);
        });
}


// ==========================================
// 🟢 TASK 2 — CONVERT API DEPARTMENT
// ==========================================

function convertDepartment(apiDepartment) {

    const department = apiDepartment.toLowerCase();

    if (department.includes("engineer")) {
        return "IT";
    }

    if (department.includes("human")) {
        return "HR";
    }

    if (department.includes("finance")) {
        return "Finance";
    }

    if (department.includes("market")) {
        return "Marketing";
    }

    // Assign other API departments
    // to one of the project departments.
    return "IT";
}


// ==========================================
// 🟢 TASK 3 — DISPLAY EMPLOYEES
// ==========================================

function displayEmployees() {

    // Clear old cards
    employeeContainer.innerHTML = "";

    // First apply search
    let filteredEmployees = searchEmployees(employees);

    // Then department filter
    filteredEmployees = filterDepartment(filteredEmployees);

    // Sort the result
    filteredEmployees = sortEmployees(filteredEmployees);

    // Update count
    updateEmployeeCount(filteredEmployees);

    // No result
    if (filteredEmployees.length === 0) {

        const message = document.createElement("div");

        message.className = "no-employees";

        message.innerHTML = `
            <h3>No employees found</h3>
            <p>Try another search or department.</p>
        `;

        employeeContainer.appendChild(message);

        return;
    }

    // forEach()
    filteredEmployees.forEach(employee => {

        const card = createEmployeeCard(employee);

        employeeContainer.appendChild(card);
    });

    // Update salary statistics
    calculateSalary(filteredEmployees);
}


// ==========================================
// 🟢 TASK 4 — CREATE EMPLOYEE CARD
// ==========================================

function createEmployeeCard(employee) {

    // createElement()
    const card = document.createElement("div");

    card.className = "employee-card";

    // setAttribute()
    card.setAttribute("data-id", employee.id);

    // Ternary operator
    const salaryText =
        employee.salary > 0
            ? formatCurrency(employee.salary)
            : "Not assigned";

    // innerHTML
    card.innerHTML = `
        <img
            src="${employee.image || "https://via.placeholder.com/100"}"
            alt="${employee.name}"
        >

        <h3>${employee.name}</h3>

        <div class="employee-info">

            <p>
                <strong>Age:</strong>
                ${employee.age}
            </p>

            <p>
                <strong>Email:</strong>
                ${employee.email}
            </p>

            <p>
                <strong>Department:</strong>
                ${employee.department}
            </p>

            <p>
                <strong>Phone:</strong>
                ${employee.phone || "Not available"}
            </p>

            <p>
                <strong>Salary:</strong>
                ${salaryText}
            </p>

        </div>

        <button class="delete-btn">
            Delete
        </button>
    `;

    // Event listener
    const deleteButton = card.querySelector(".delete-btn");

    deleteButton.addEventListener("click", () => {

        deleteEmployee(employee.id);

    });

    return card;
}


// ==========================================
// 🟢 TASK 5 — SEARCH EMPLOYEES
// ==========================================

function searchEmployees(employeeArray) {

    const searchText = currentSearch
        .trim()
        .toLowerCase();

    // If search is empty return original array
    if (searchText === "") {
        return employeeArray;
    }

    // filter() + includes()
    return employeeArray.filter(employee =>
        employee.name
            .toLowerCase()
            .includes(searchText)
    );
}


// ==========================================
// 🟢 TASK 6 — DEPARTMENT FILTER
// ==========================================

function filterDepartment(employeeArray) {

    if (currentDepartment === "All") {
        return employeeArray;
    }

    return employeeArray.filter(employee => {

        return employee.department === currentDepartment;

    });
}


// ==========================================
// 🟢 TASK 7 — SEARCH BUTTON
// ==========================================

searchBtn.addEventListener("click", () => {

    currentSearch = searchInput.value;

    displayEmployees();

});


// Search while typing
searchInput.addEventListener("input", () => {

    currentSearch = searchInput.value;

    displayEmployees();

});


// ==========================================
// 🟢 TASK 8 — DEPARTMENT BUTTONS
// ==========================================

const departmentButtons =
    document.querySelectorAll(".department-btn");

departmentButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        departmentButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        // Get department
        currentDepartment =
            button.getAttribute("data-department");

        displayEmployees();
    });

});


// ==========================================
// 🟢 TASK 9 — UPDATE EMPLOYEE COUNT
// ==========================================

function updateEmployeeCount(employeeArray) {

    employeeCount.textContent =
        employeeArray.length;
}


// ==========================================
// 🟢 TASK 10 — ADD EMPLOYEE
// ==========================================

employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name =
        document.getElementById("name").value.trim();

    const age =
        Number(document.getElementById("age").value);

    const email =
        document.getElementById("email").value.trim();

    const department =
        document.getElementById("department").value;

    const salary =
        Number(document.getElementById("salary").value);

    // Validate
    const isValid = validateEmployee(
        name,
        age,
        email,
        department,
        salary
    );

    // Don't add if invalid
    if (!isValid) {
        return;
    }

    // Create employee object
    const newEmployee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        department: department,

        phone: "Not available",

        image: "https://i.pravatar.cc/150?img=12",

        salary: salary

    };

    // Spread operator
    employees = [
        ...employees,
        newEmployee
    ];

    // Display updated array
    displayEmployees();

    // Clear form
    clearForm();

    // Success message
    statusMessage.textContent =
        `${name} was added successfully.`;

    statusMessage.style.background = "#dcfce7";
    statusMessage.style.color = "#166534";
});


// ==========================================
// 🟢 TASK 11 — VALIDATE EMPLOYEE
// ==========================================

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    clearErrors();

    let valid = true;

    // Name validation
    if (name === "") {

        document.getElementById("nameError").textContent =
            "❌ Please enter employee name";

        valid = false;
    }

    // Age validation
    if (age <= 18 || Number.isNaN(age)) {

        document.getElementById("ageError").textContent =
            "❌ Age must be greater than 18";

        valid = false;
    }

    // Email validation
    if (email === "") {

        document.getElementById("emailError").textContent =
            "❌ Please enter employee email";

        valid = false;
    }

    // Simple email check
    if (
        email !== "" &&
        !email.includes("@")
    ) {

        document.getElementById("emailError").textContent =
            "❌ Please enter a valid email";

        valid = false;
    }

    // Department validation
    if (department === "") {

        document.getElementById("departmentError").textContent =
            "❌ Please select a department";

        valid = false;
    }

    // Salary validation
    if (salary <= 0 || Number.isNaN(salary)) {

        document.getElementById("salaryError").textContent =
            "❌ Salary must be greater than 0";

        valid = false;
    }

    return valid;
}


// ==========================================
// 🟢 TASK 12 — CLEAR ERRORS
// ==========================================

function clearErrors() {

    document.getElementById("nameError").textContent = "";

    document.getElementById("ageError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("departmentError").textContent = "";

    document.getElementById("salaryError").textContent = "";
}


// ==========================================
// 🟢 TASK 13 — CLEAR FORM
// ==========================================

function clearForm() {

    employeeForm.reset();

    clearErrors();
}


// ==========================================
// 🟢 TASK 14 — DELETE EMPLOYEE
// ==========================================

function deleteEmployee(id) {

    // filter() removes employee
    employees = employees.filter(employee => {

        return employee.id !== id;

    });

    // Redisplay
    displayEmployees();

    statusMessage.textContent =
        "Employee deleted successfully.";

    statusMessage.style.background = "#fee2e2";
    statusMessage.style.color = "#991b1b";
}


// ==========================================
// 🟢 TASK 15 — SALARY CALCULATION
// ==========================================

function calculateSalary(employeeArray) {

    // Only employees with salary
    const employeesWithSalary =
        employeeArray.filter(employee =>
            employee.salary > 0
        );

    if (employeesWithSalary.length === 0) {

        totalSalary.textContent = "₹0";

        averageSalary.textContent = "₹0";

        highestPaid.textContent = "None";

        return;
    }

    // reduce() for total salary
    const total =
        employeesWithSalary.reduce(
            (sum, employee) =>
                sum + employee.salary,
            0
        );

    // reduce() / length
    const average =
        total / employeesWithSalary.length;

    // Highest salary
    const highest =
        employeesWithSalary.reduce(
            (highestEmployee, employee) => {

                return employee.salary >
                    highestEmployee.salary
                    ? employee
                    : highestEmployee;

            }
        );

    totalSalary.textContent =
        formatCurrency(total);

    averageSalary.textContent =
        formatCurrency(Math.round(average));

    highestPaid.innerHTML = `
        ${highest.name}
        <br>
        <small>${formatCurrency(highest.salary)}</small>
    `;
}


// ==========================================
// 🟢 TASK 16 — FIND EMPLOYEE
// ==========================================

function findEmployee(id) {

    // find()
    return employees.find(employee =>
        employee.id === id
    );
}


// Example:
// const employee = findEmployee(1);
// console.log(employee);


// ==========================================
// 🟢 TASK 17 — SORT EMPLOYEES
// ==========================================

function sortEmployees(employeeArray) {

    // Create a new array using spread
    const sortedArray = [...employeeArray];

    const sortType = sortSelect.value;

    if (sortType === "name-asc") {

        sortedArray.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    else if (sortType === "name-desc") {

        sortedArray.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    else if (sortType === "age-asc") {

        sortedArray.sort((a, b) =>
            a.age - b.age
        );
    }

    else if (sortType === "age-desc") {

        sortedArray.sort((a, b) =>
            b.age - a.age
        );
    }

    else if (sortType === "salary-asc") {

        sortedArray.sort((a, b) =>
            a.salary - b.salary
        );
    }

    else if (sortType === "salary-desc") {

        sortedArray.sort((a, b) =>
            b.salary - a.salary
        );
    }

    return sortedArray;
}


// Sort event
sortSelect.addEventListener("change", () => {

    displayEmployees();

});


// ==========================================
// 🟢 TASK 18 — DATE & TIME
// ==========================================

function updateDateTime() {

    // new Date()
    const now = new Date();

    const day = now.getDate();

    const month = now.toLocaleString(
        "en-IN",
        { month: "long" }
    );

    const year = now.getFullYear();

    let hours = now.getHours();

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    // AM / PM
    const period =
        hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("today").textContent =
        `Today: ${day} ${month} ${year}`;

    document.getElementById("currentTime").textContent =
        `Time: ${hours}:${minutes} ${period}`;
}


// Run immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);


// ==========================================
// 🟢 TASK 19 — CURRENCY FORMAT
// ==========================================

function formatCurrency(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);
}


// ==========================================
// 🟢 TASK 20 — SOME() EXAMPLE
// ==========================================

function employeeExists(email) {

    // some() checks whether at least
    // one employee satisfies the condition

    return employees.some(employee =>
        employee.email.toLowerCase() ===
        email.toLowerCase()
    );
}


// ==========================================
// 🟢 TASK 21 — EVERY() EXAMPLE
// ==========================================

function areEmployeesValid() {

    // every() checks whether all employees
    // satisfy a condition

    return employees.every(employee =>
        employee.name !== "" &&
        employee.age > 18 &&
        employee.email.includes("@")
    );
}


// ==========================================
// START APPLICATION
// ==========================================

fetchEmployees();
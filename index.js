// index.js

const http = require("http");
const employees = require("./employee");  // Import employee data

console.log("Lab 03 - NodeJs");

// Define the port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        } 
        
        else if (req.url === '/employee') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(employees));  // Send the entire employee list in JSON format
        } 
        
        else if (req.url === '/employee/names') {
            // Map to get full names and sort alphabetically
            const names = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(names));
        } 
        
        else if (req.url === '/employee/totalsalary') {
            // Calculate the total salary of all employees
            const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ "total_salary": totalSalary }));
        } 
        
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
});

// Start the server and listen to the defined port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

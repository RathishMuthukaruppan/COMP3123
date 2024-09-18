// Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

// Sedan subclass extending Car
class Sedan extends Car {    constructor(model, year, balance) {
        super(model, year); // Call parent constructor to set model and year
        this.balance = balance; // Set balance for Sedan
    }

    info() {
        return `${super.details()}, Balance: ${this.balance}`;
    }
}

// Creating instances and testing
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); // Output: Model: Pontiac Firebird, Year: 1976

const sedan = new Sedan('Volvo SD', 2018, 3000);
console.log(sedan.info()); // Output: Model: Volvo SD, Year: 2018, Balance: 3000

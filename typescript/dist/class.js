"use strict";
class Car {
    constructor(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    displayMake() {
        console.log(`This car is ${this.model}`);
    }
}
const bmw = new Car('BMW', 4, true);
bmw.displayMake();

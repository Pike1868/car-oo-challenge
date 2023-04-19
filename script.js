// ## **Part One**
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "honk";
  }
  toString() {
    return `Make:${this.make}, Model:${this.model}, Year: ${this.year}`;
  }
}

// ## **Part Two**
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myCar = new Car("Ford", "F150", 2018);

// ## **Part Three**

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return `VROOM!!!`;
  }
}

let myBike = new Motorcycle("Ducati", "Multistrada-v4", 2023);

//## **Part Four**
class Garage {
  constructor(vehicles, capacity) {
    this.vehicles = vehicles;
    this.capacity = capacity;
    this.name = name;
  }
  add(newVehicle) {
    if (newVehicle instanceof Vehicle) {
      if (this.vehicles.length < this.capacity) {
        this.vehicles.push(newVehicle);
      } else {
        throw new Error(`Sorry, we're full`);
      }
    } else {
      alert(`Only vehicles are allowed here!`);
    }
  }
}

let myGarage = new Garage([myCar], 2);

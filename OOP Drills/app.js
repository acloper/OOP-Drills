// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log("Hello my name is " + this.name + ".");
// };

// let person1 = new Person("Aaron");
// let person2 = new Person("Regan");
// let person3 = new Person("Anna");
// let person4 = new Person("Coleman");
// let person5 = new Person("Annette");

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// class Person {
//   constructor(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello my name is ${this.name}! I am ${this.age} years old and live in ${this.city}.`);
//   }
// }
// let p1 = new Person("Aaron", "Birmingham", 31);
// let p2 = new Person("Regan", "Birmingham", 32);
// let p3 = new Person("Anna", "Birmingham", 26);
// let p4 = new Person("Coleman", "Atlanta", 42);
// let p5 = new Person("Annette", "Atlanta", 48);

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }
  get type() {
    return this.constructor.name.toLowerCase();
  }
  aboutVehicle() {
    console.log(`This is a ${this.type}, which was made by ${this.manufacturer} and has ${this.wheels} wheels.`);
  }
}

class Truck extends Vehicle {
  constructor(manufacturer, doors) {
    super(4, manufacturer);
    this.doors = doors;
    this.truckBed = true;
  }
  aboutVehicle() {
    console.log(`This is a ${this.type}, which was made by ${this.manufacturer} and has ${this.wheels} wheels, and a truck bed.`);
  }
}

class Sedan extends Vehicle {
  constructor(manufacturer, doors, size, mpg) {
    super(4, manufacturer);
    this.doors = doors;
    this.size = size;
    this.mpg = mpg;
    this.truckBed = false;
  }
  aboutVehicle() {
    console.log(
      `This is a ${this.type}, which was made by ${this.manufacturer}. It has ${this.doors} doors, is ${this.size}-size, gets ${this.mpg} miles per gallon, has ${this.wheels} wheels, and no truck bed.`
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(manufacturer) {
    super(manufacturer, 2);
    this.handlebars = "handlebar";
    this.doors = 0;
  }
  aboutVehicle() {
    console.log(`This is a ${this.type}, which was made by ${this.manufacturer}.  It has ${this.doors} doors, ${this.handlebars}-based steering, has ${this.wheels} wheels, and can't go in reverse.`);
  }
}

let vehicle = new Vehicle("toyota", 4);
let truck = new Truck("Ford", 4);
let sedan = new Sedan("Mazda", 2, "small", 30);
let motorcycle = new Motorcycle("Harley-Davidson");

vehicle.aboutVehicle();
truck.aboutVehicle();
sedan.aboutVehicle();
motorcycle.aboutVehicle();

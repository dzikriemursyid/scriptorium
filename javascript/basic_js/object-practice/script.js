//              //
//# Creating an object using object literal syntax

// Creating an object using object literal syntax
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

// Accessing properties using dot notation
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30

// Accessing properties using bracket notation
console.log(person["city"]); // Output: 'New York'

// Calling a method of the object
person.greet(); // Output: 'Hello, my name is John and I'm 30 years old.'

//              //
//# Creating an object using Function

function createPerson(name, age, city) {
  const person = {}; // Create an empty object

  // Add properties to the object
  person.name = name;
  person.age = age;
  person.city = city;

  // Add method to the object
  person.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };

  return person; // Return the object
}

const person1 = createPerson("John", 30, "New York");
const person2 = createPerson("Alice", 25, "Los Angeles");

console.log(person1.name); // Output: 'John'
console.log(person2.age); // Output: 25
person1.greet(); // Output: 'Hello, my name is John and I'm 30 years old.'

//              //
//# Creating an object using Object.create()

// Function to create a person object
function createPerson2(name, age, city) {
  const person = Object.create(personMethods); // Creating an object with personMethods as prototype

  // Adding properties to the object
  person.name = name;
  person.age = age;
  person.city = city;

  return person; // Return the object
}

// Object containing methods for person objects
const personMethods = {
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
  changeName: function (newName) {
    this.name = newName;
  },
  celebrateBirthday: function () {
    this.age++;
    console.log(`Happy birthday, ${this.name}! You're now ${this.age} years old.`);
  },
};

// Creating instances of person objects
const person3 = createPerson2("John", 30, "New York");
const person4 = createPerson2("Alice", 25, "Los Angeles");

console.log(person3.name); // Output: 'John'
console.log(person4.age); // Output: 25
person1.greet(); // Output: 'Hello, my name is John and I'm 30 years old.'

person3.changeName("Johnny");
console.log(person3.name); // Output: 'Johnny'

person4.celebrateBirthday(); // Output: 'Happy birthday, Alice! You're now 26 years old.'

//              //
//# Creating an object using Constructor Function

function PersonConstructor(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

PersonConstructor.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const personConstructor1 = new PersonConstructor("John", 30, "New York");
const personConstructor2 = new PersonConstructor("Alice", 25, "Los Angeles");

console.log(personConstructor1.name); // Output: 'John'
console.log(personConstructor2.age); // Output: 25
personConstructor1.greet(); // Output: 'Hello, my name is John and I'm 30 years old.'

//              //
//# Creating an object using Class

// Define a class for creating person objects
class PersonClass {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  // Method to change the name
  changeName(newName) {
    this.name = newName;
  }

  // Method to celebrate birthday
  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday, ${this.name}! You're now ${this.age} years old.`);
  }
}

// Creating instances of person objects
const personClass1 = new PersonClass("John", 30, "New York");
const personClass2 = new PersonClass("Alice", 25, "Los Angeles");

console.log(personClass1.name); // Output: 'John'
console.log(personClass2.age); // Output: 25
personClass1.greet(); // Output: 'Hello, my name is John and I'm 30 years old.'

personClass1.changeName("Johnny");
console.log(personClass1.name); // Output: 'Johnny'

personClass2.celebrateBirthday(); // Output: 'Happy birthday, Alice! You're now 26 years old.'

//              //
//# Creating an object using Class, Extends, and Super()

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method to display the name of the animal
  display() {
    console.log(`This is ${this.name}.`);
  }
}

// Subclass inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor and pass the 'name' argument

    this.breed = breed;
  }

  // Method specific to Dog class
  bark() {
    console.log("Woof! Woof!");
  }

  // Overriding method from the parent class
  display() {
    console.log(`This is ${this.name}, a ${this.breed}.`);
  }
}

// Creating instances of Dog class
const myDog = new Dog("Buddy", "Labrador Retriever");

// Calling methods
myDog.display(); // Output: 'This is Buddy, a Labrador Retriever.'
myDog.bark(); // Output: 'Woof! Woof!'

"use strict";
//Basic Types
/*
There are 4 base types in TS.
- number
- string
- boolean
- any (This is also the default type. Simply means that the variable doesn't have a specific type)
*/
let firstName = "Boris";
let lastName = "Borisovski";
let age = 30;
let isBoolean = true;
let dontUse = "1"; // Avoid like the plague
//Arrays
/*
Arrays in Typescript can also be given types to work with. This prevents us from adding elements of different types within the array,
giving us type safety.
*/
const namesArr = ["Anastasija", "Ivan", "Dimitar"];
const numbersArr = [30, 50, 100];
const randomArr = [true, "test", 3000]; //Avoid doing this
namesArr.push("Ljupka");
console.log(namesArr);
//Tuple
/*
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
*/
const personTuple = ["Anastasija", "Dimkovska", 100];
const personConfig = ["Boris", true];
//Union
/*
 Sometimes, it's possible for a variable to come in different types. TypeScript unions allows us to use more than one data type for a variable or a function parameter.
*/
let uniodId = 10;
uniodId = "100";
//Enum
/*
Enums allow a developer to define a set of named constants.
Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/
var Action;
(function (Action) {
  Action["FORWARD"] = "W";
  Action["BACKWARD"] = "S";
  Action["LEFT"] = "A";
  Action["RIGHT"] = "D";
})(Action || (Action = {}));
var CountryCodes;
(function (CountryCodes) {
  CountryCodes["USA"] = "USA";
  CountryCodes["GBR"] = "Great Britain";
  CountryCodes["ARG"] = "Argentina";
})(CountryCodes || (CountryCodes = {}));
console.log(Action.FORWARD);
console.log(Action.LEFT);
console.log(Action.RIGHT);
const userOne = {
  id: 1,
  name: "Boris Borisovski",
  age: 30,
  country: "Macedonia",
  hobby: "Gaming",
};
const userTwo = {
  id: 2,
  name: "Ivan Janmandilovski",
  age: 33,
  country: "Macedonia",
  hobby: "Death Metal Player",
};
//Type Assertion
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
Usually, this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
let personId = 1;
let assertedPersonId = personId;
let assertedPersonIdTwo = personId;
//Functions
/*
TypeScript can usually infer the intended type arguments in a generic call, but not always. Hence, it is useful for us to explicitly
specify the argument types within the function definition.

Functions in JavaScript often take a variable number of arguments.
We can model this in TypeScript by marking the parameter as optional with ?

It is also a good practice to always specify the return type of the value that the function will produce.
*/
function multiply(x, y) {
  return `${x} x ${y} = ${x * y}`;
}
multiply(14, 25);
const messageOne = {
  id: 100,
  text: "Hello Angular!",
  sender: "Ivan",
};
const addTwoNumbers = (x, y) => x + y;
const divideTwoNumbers = (x, y) => x / y;
//Classes
/*
Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components,
but this may feel a bit awkward to programmers more comfortable with an object-oriented approach,
where classes inherit functionality and objects are built from these classes.
*/
/* ACCESS MODIFIERS */
/*
In our examples, we’ve been able to freely access the members that we declared throughout our programs.
If you’re familiar with classes in other languages, you may have noticed in the above examples we haven’t had to use the word public to accomplish this; for instance,
C# requires that each member be explicitly labeled public to be visible. In TypeScript, each member is public by default.
You may still mark a member public explicitly.

- Public, means that the parameter can be accessed from anywhere
- Protected, means that the parameter can be accessed from the class, or the classes extend from that class
- Private, means that the parameter can only be accessed within the class

There are two ways of accessing private fields/properties of a class.
1. You can either create methods that specifically return or set the value. Example: getPersonId()
2. Rely on Typescripts getter/setter syntax. Example get id(): number {return this._id};
*/
class Person {
  constructor(name, status) {
    this._country = "USA";
    this.name = name;
    this.status = status;
  }
  getCountry() {
    return this.country;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    console.log("Value Sets");
    this._country = value;
  }
}
const student = new Person("Dimitar Eftimov", true);
student.country = "MKD";
console.log(student.country);
/*
Classes can implement interfaces. They can implement as much interfaces as you want.
Implementing an interface means that the class signs a contract that it will implement the methods
and properties that were defined in the interface.
*/
class Human {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.greeting = `Hi, my name is ${name}`;
  }
}
const personOne = new Human(1, "Homo Sapiens");
class Vehicle {
  constructor() {
    this.currentSpeed = 50;
    this.currentGear = 1;
  }

  getSpeed() {
    return this.currentSpeed;
  }
  changeGear(newGear) {
    this.currentGear = newGear;
  }
}

const car = new Vehicle();

console.log(car.getSpeed());
car.changeGear(2);

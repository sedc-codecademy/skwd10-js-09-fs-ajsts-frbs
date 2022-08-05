"use strict";
// Declaring a variable, means it exists
// Initialization adds a value
// Declaration
let myNumber;
let otherNumer = 5;
const obj = {
    name: "Ivan",
    age: 30,
};
console.log(obj);
// [Basic Types]
/*
- number
- string
- boolean
- undefined
- any
*/
let id = 1;
// Equivalent to let id = 1;
let username = "Ivan";
let registered = true;
let myVariable; // Avoid using any.
console.log(id.toFixed(2));
// [Arrays]
let names = ["Ivan", "Jana", "Cvetan", "Zoran"];
names.forEach((name) => {
    console.log(name, `Length of name: ${name.length}`);
});
// [Tuples]
let personTuple = [1, "Ivan", true];
// Rarely used, if ever.
let employees = [
    [1, "Ivan"],
    [2, "Jana"],
    [3, "Dejan"],
];
// [Union]
let unionId = 1;
// [Enum]
var Actions;
(function (Actions) {
    Actions["FORWARD"] = "W";
    Actions["BACKWARD"] = "S";
    Actions["LEFT"] = "A";
    Actions["RIGHT"] = "D";
})(Actions || (Actions = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["OPEN"] = "open";
    TicketStatus["IN_PROGRESS"] = "progress";
    TicketStatus["CLOSED"] = "closed";
    TicketStatus["CANCELLED"] = "cancelled";
})(TicketStatus || (TicketStatus = {}));
const myAction = "W";
console.log(Actions.FORWARD);
console.log(Actions.BACKWARD);
if (myAction === "W") {
}
if (myAction === Actions.FORWARD) {
    console.log("You pressed forward!");
}
const ticketStatus = "closed";
if (ticketStatus === TicketStatus.CLOSED) {
    console.log("Ticket is closed!");
}
const registeredUser = {
    id: 1,
    name: "Ivan",
    registered: true,
};
// Don't do this
const otherUser = {
    id: "asdasdasd",
    name: "Ivan",
};
// [Type Assertion]
let customerId = 1;
let cId = customerId;
// cId = '5';  This won't work. cId is explicitly a number.
console.log(cId);
// Functions
function addNum(firstNum = 0, secondNum = 0, message) {
    if (message) {
        console.log(message);
    }
    return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
}
function logger(message) {
    console.log(`Your mesage: ${message}!`);
}
// This works
// const num = addNum();
// console.log(num);
addNum(2, 3, "Hello World");
const quickMessage = {
    id: 1,
    text: "Hello World!",
};
const addTwoNumbers = (first, second) => {
    return first + second;
};
const multiplyTwoNumbers = (first, second) => first * second;
// [Classes]
class Person {
    constructor(name, status) {
        this._id = 1;
        this.name = name;
        this.status = status;
    }
    printPersonName() {
        console.log(this.name);
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
const student = new Person("John", false);
student.printPersonName();
console.log(student.id);
student.id = 5;
// [Inheritance]
class Actor {
    constructor(id, name, status) {
        this.phoneId = 123456;
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
class Entity extends Actor {
    constructor(id, name, status) {
        super(id, name, status);
        this._position = { posX: 0, posY: 0, posZ: 0 };
        console.log("Entity constructor", this.phoneId);
    }
    get position() {
        return this._position;
    }
}
const myEntity = new Entity(1, "Ivan", true);
// console.log(myEntity.phoneId);
// Inheritance
class Parent {
    constructor(house, lastName) {
        this.house = house;
        this.lastName = lastName;
    }
    buyCar() {
        return false;
    }
}
class Child extends Parent {
    constructor(name, house, lastName) {
        super(house, lastName);
        this.name = name;
    }
    getAJob() {
        console.log("Child got a job!");
        console.log(2 + 2);
        return true;
    }
    singing() {
        console.log(Math.random());
    }
}
const kid = new Child("Kid", true, "Kidovski");
kid.getAJob();
kid.buyCar();
kid.singing();

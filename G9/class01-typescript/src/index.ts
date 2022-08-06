// Declaring a variable, means it exists
// Initialization adds a value

// Declaration
let myNumber: number;
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

let id: number = 1;
// Equivalent to let id = 1;
let username: string = "Ivan";
let registered: boolean = true;
let myVariable: any; // Avoid using any.

console.log(id.toFixed(2));

// [Arrays]
/* 
Arrays in Typescript can also be given types to work with. This prevents us from adding elements of different types within the array,
giving us type safety.
*/
let names: string[] = ["Ivan", "Jana", "Cvetan", "Zoran"];
names.forEach((name) => {
  console.log(name, `Length of name: ${name.length}`);
});

// [Tuples]
/*
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
*/
let personTuple: [number, string, boolean] = [1, "Ivan", true];
// Rarely used, if ever.
let employees: [number, string][] = [
  [1, "Ivan"],
  [2, "Jana"],
  [3, "Dejan"],
];

// [Union]
// Sometimes, it's possible for a variable to come in different types. TypeScript unions allows us to use more than one data type for a variable or a function parameter.
let unionId: number | string | undefined = 1;

// [Enum]
/*
Enums allow a developer to define a set of named constants. 
Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/
enum Actions {
  FORWARD = "W",
  BACKWARD = "S",
  LEFT = "A",
  RIGHT = "D",
}
// By default, the values here are 0, 1, 2, 3 etc. But you can set them in the enum.

enum TicketStatus {
  OPEN = "open",
  IN_PROGRESS = "progress",
  CLOSED = "closed",
  CANCELLED = "cancelled",
}

const myAction = "W";

console.log(Actions.FORWARD);
console.log(Actions.BACKWARD);

// This is bad. You want more generic conditions.
// if (myAction === "W") {
// }

if (myAction === Actions.FORWARD) {
  console.log("You pressed forward!");
}

const ticketStatus = "closed";
if (ticketStatus === TicketStatus.CLOSED) {
  console.log("Ticket is closed!");
}

// [Objects]
/*
In JavaScript, the fundamental way that we group and pass around data is through objects. 
In TypeScript, we represent those through object types.
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.
*/

type User = {
  id: number;
  name: string;
  registered: boolean;
};

const registeredUser: User = {
  id: 1,
  name: "Ivan",
  registered: true,
};

// Don't do this
// Always create an interface instead
const otherUser: { id: string; name: string } = {
  id: "asdasdasd",
  name: "Ivan",
};

// [Type Assertion]
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. 
Usually, this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. 
It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/

let customerId: any = 1;
let cId = <number>customerId;
// cId = '5';  This won't work. cId is explicitly a number.
console.log(cId);

// [Functions]
/* 
TypeScript can usually infer the intended type arguments in a generic call, but not always. Hence, it is useful for us to explicitly
specify the argument types within the function definition.

Functions in JavaScript often take a variable number of arguments. 
We can model this in TypeScript by marking the parameter as optional with ?
It is also a good practice to always specify the return type of the value that the function will produce.
*/

function addNum(
  firstNum: number = 0,
  secondNum: number = 0,
  message?: string
): string {
  if (message) {
    console.log(message);
  }
  return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
}

function logger(message: string | number): void {
  console.log(`Your mesage: ${message}!`);
}

// This works
// const num = addNum();
// console.log(num);

addNum(2, 3, "Hello World");

// [Interfaces]
/*
It’s pretty common to have types that might be more specific versions of other types. 
This is where interfaces come in play. 

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
Classes that implement an interface must follow the structure provided by their interface. 
The TypeScript compiler does not convert interface to JavaScript.
*/

interface Message {
  id: number;
  text: string;
}

const quickMessage: Message = {
  id: 1,
  text: "Hello World!",
};

// [Function Interfaces]
/*
Interfaces can also be applied to functions. 
Interfaces ensure that all callers of functions that implement the interface supply the required arguments,
and also return the required value type.
*/

interface MathFunction {
  (x: number, y: number): number;
}

const addTwoNumbers: MathFunction = (first: number, second: number): number => {
  return first + second;
};

const multiplyTwoNumbers: MathFunction = (
  first: number,
  second: number
): number => first * second;

// [Classes]
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
  private _id: number = 1;
  name: string;
  status: boolean;
  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = status;
  }
  printPersonName() {
    console.log(this.name);
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}

const student: Person = new Person("John", false);
student.printPersonName();
console.log(student.id);
student.id = 5;

// [Inheritance]

/*
Classes can also extend other classes. A feature of object oriented programming called inheritance.
This example shows the most basic inheritance feature: classes inherit properties and methods from base classes.
 Derived classes are often called subclasses or children, and base classes are often called superclasses or parents.
*/

/*
Each derived class that contains a constructor function must call super() which will execute the constructor of the base class. 
What’s more, before we ever access a property on this in a constructor body, we have to call super(). This is an important rule that TypeScript will enforce.
*/

class Actor {
  id: number;
  name: string;
  public status: boolean;
  protected phoneId: number = 123456;
  constructor(id: number, name: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

interface Position {
  posX: number;
  posY: number;
  posZ: number;
}

class Entity extends Actor {
  private _position: Position = { posX: 0, posY: 0, posZ: 0 };
  constructor(id: number, name: string, status: boolean) {
    super(id, name, status);
    console.log("Entity constructor", this.phoneId);
  }

  get position(): Position {
    return this._position;
  }
}

const myEntity = new Entity(1, "Ivan", true);
// console.log(myEntity.phoneId);

// [Inheritance Example]
/*
Classes can implement interfaces. They can implement as much interfaces as you want.
Implementing an interface means that the class signs a contract that it will implement the methods
and properties that were defined in the interface.
*/

class Parent {
  house: boolean;
  lastName: string;
  constructor(house: boolean, lastName: string) {
    this.house = house;
    this.lastName = lastName;
  }
  buyCar(): boolean {
    return false;
  }
}

interface Job {
  getAJob(): boolean;
}

interface SingASong {
  singing(): void;
}

class Child extends Parent implements Job, SingASong {
  name: string;
  constructor(name: string, house: boolean, lastName: string) {
    // this.lastName = lastName; // <- This wont work. Because these properties are inherited from the parent. You MUST call super first.
    // Super calls the parents constructor.
    super(house, lastName);
    this.name = name;
  }
  getAJob(): boolean {
    console.log("Child got a job!");
    console.log(2 + 2);
    return true;
  }
  singing(): void {
    console.log(Math.random());
  }
}

const kid: Child = new Child("Kid", true, "Kidovski");
kid.getAJob();
kid.buyCar();
kid.singing();

/* JS built-in tool printing output */
console.log("hi there");

// several ways to define VARIABLES
// luckyNum is a camelCase
// 'let luckyNum = 23;' dynamically typed language which means no data type annotations are neccessary
// the number 23 is 1 out of 7 primitive data types (string/number/bigint/boolean/undefined/symbol/null ) built into JS
let luckyNum = 23;

// we dont need to assign a variable at the moment it can be reassigned later in the code
// let luckyNum;
// console.log(luckyNum); // at the moment luckyNum is undefined at default as a primitive value

luckyNum = null; //this represent empty value for the moment

luckyNum = "twenty-three"; //this reassigned the variable to a string a new data type

// to define variables let / const / var
const name = "jeff"; // a variable that cannot be reassigned later

name = "jeffrey"; //name is marked because variable has been declared

// var is the original way to declare a variable
var bad = "avoid var unless you are smart";

//the reason why we have severals ways to define variables has to do with the LEXICAL SCOPE

let a = "gloabl"; //this variable will be everywhere 'global scope'

function fun() {
  let a = "function"; // this variable only works in this function 'local scope'
  if (true) {
    let a = "block"; // this variable can be use inside the braces or 'block scope'
    var b = "hoisted"; // this variable will work in the 'local scope'
  }
}

//FUNCTIONS = building blocks
//they work by taking an input then optionallu return a value that can be use somewhere else?
function add(a, b) {
  //a, b is input parameters or argument
  return a + b;
}

//functions are objects ?
//below is called a FUNCTION EXPRESSION where it constructs HIGHER-ORDER FUCNTION
// the below can be used as varibles as well
const add = function add(a, b) {
  return a + b;
};

//a higher order function

function higherOrder(fun) {
  fun(); //statment or argument
  return function () {}; //the return value
}

//functions can also be nested to create a closure that encapsulates data and logic see below

function giveMeClosure() {
  let a = 10; // a = varirable, 10 = primitive value, normally when the function is call it is stored in the 'call stack' which is the browser's short-term memory
  //the 3 lines below defines as a closure, this inner function still can access to the variables in the outer function due to HEAP MEMORY
  return function () {
    a++;
    return a;
  };
} // rare occasion apparently

// common function i may run into

function wtfIsThis() {
  console.log(this); // 'this' is a key that references as an object based on how a function is called
} // when called from the global scope it references the window object in the browser

//howerver if the above function is attached to an object and called by that object 'this' is a reference of that object
const person = {
  wtfIsThis: function () {
    console.log(this);
  },
};

// We can manually 'BIND' that object using the bind method
// maybe confusing to understand

function wtfIsThis() {
  console.log(this);
}

const person = {};

const personFun = wtfIsThis.bind(person);

// modern JS have another way to define functions using the arrow syntax
// arrow functions dont have their own 'this' value so there are alwasy 'anonymous' makes them ideal for function expressions
function wtfIsThis() {
  console.log(this);
}

const person = {
  wtfIsThis: () => {
    console.log(this);
  },
};

// Important to know when passing arguments

const num = 23;
const obj = new Object();

someFun(num, obj); //num= passed by value, a copy is created in the orignal variable // obj= it is stored in the HEAP and is passed by reference, may be mutating in the code by the same obj

// OBJECTS
//easiest way to define object is with 'OBJECT LITERAL' using braces

const human = {};

// but there is also an object type that can be created with 'OBJECT CONSTRUCTOR'
const human = new Object();

// an object contains key value parameters or properties in values
const human = {
  dna: "AACTG",
  name: "Jeff",
  born: Date.now(),
  walk() {
    console.log("walking");
  },
};

// object can also inherit properties from each by 'PROTOTYPE CHAIN'
//Every JavaScript object has a special property called __proto__ (or Object.getPrototypeOf() method in modern code) that points to another object. This object is called the prototype. The prototype object itself may have its own prototype, and this chain continues until it reaches the end.
//Inheritance:
//This prototype chain allows objects to inherit properties and methods from their prototypes. For example, if an object obj doesn't have a certain property, JavaScript will look for that property in its prototype, then in the prototype's prototype, and so on.
human._proto_._proto_;

//OR

//Recommended way tp get the prototype
Object.getPrototypeOf(human);

// Object-Oriented Programming (OOP) in JavaScript is a programming paradigm that uses "objects" to design and structure software. It revolves around the concept of objects, which can contain both data and methods. JavaScript supports OOP principles and provides several ways to implement them.

// Here are some key concepts of OOP in JavaScript:

// Objects: The basic building blocks in OOP. In JavaScript, objects are collections of key-value pairs. Each key is a property name, and each value can be any data type, including functions (methods).
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// Classes: JavaScript introduced classes in ECMAScript 6 (ES6). A class is a blueprint for creating objects with shared properties and methods. You can create instances of a class using the new keyword.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const alice = new Person("Alice", 30);
alice.greet(); // Output: Hello, Alice

//Inheritance: This allows one class to inherit properties and methods from another. In JavaScript, this is achieved using the extends keyword.
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describe() {
    console.log(`${this.name} is a ${this.jobTitle}`);
  }
}

const bob = new Employee("Bob", 40, "Developer");
bob.describe(); // Output: Bob is a Developer

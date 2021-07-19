//uses of this
//1. give methods access to their object
//2. execute same code for multiple objects

//Exercise 1
const obj = {
  name: "Satya",
  sing() {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

console.log(obj.singAgain());

//Excercise 2
function importPerson() {
  console.log(this.name);
}
var name = "Satya";

const obj1 = {
  name: "Ceaser",
  importPerson: importPerson,
};

const obj2 = {
  name: "Juliet",
  importPerson: importPerson,
};

obj1.importPerson();

//Excercise 3

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};

a();

// anything to the left of the poperty refers to this.

//Exercise 4
const justAnotherObject = {
  name: "Billy",
  sing() {
    console.log("sing", this);
    var anotherFunc = function () {
      console.log("anotherFunc", this); //this keyword will refer to window object, to solve this we have  ES6's arrow function, refer to Example 5
    };
    anotherFunc();
  },
};

justAnotherObject.sing();

//BIGGEST GOTCHA is, it doesnt really matter where you called the object, all it matters is where it is defined, and this will always look for the object it has been called by, if there is no object that has called this, then the 'this' will point to windows.

// In Javascript our lexical scope (available data + variables where the function was defined)
// determines our available variables, Not where the function is called (dynamic scope), everything is javascript is designed to behave like this, except for 'this'
// keyword, meaning it doesnt matter where it is called all it matters is how it is called
// TO solve the issue of "this" being referred to dynamic scope, es6 has introduced arrow function

//Exercise 5
const justOneMoreObject = {
  name: "Billy",
  sing() {
    console.log("sing", this);
    var anotherMoreFunc = () => {
      console.log("anotherFunc", this); //this keyword will refer to lexical scope now, in arrow function
    };
    anotherMoreFunc();
  },
};

justOneMoreObject.sing();

//Solving this dynamic scope issue without arrow function

//Exercise 6
const probablyTheLastObject = {
  name: "Billy",
  sing() {
    console.log("sing", this);
    var anotherMoreFunc = function () {
      console.log("anotherFunc", this); //this keyword will refer to lexical scope now, in arrow function
    };
    return anotherMoreFunc.bind(this); //
  },
};

probablyTheLastObject.sing()();

const lastObject = {
  name: "Billy",
  sing() {
    console.log("sing", this);
    var self = this;
    var anotherMoreFunc = function () {
      console.log("last Object", self); //this keyword will refer to lexical scope now, in arrow function
    };
    anotherMoreFunc(); //
  },
};

lastObject.sing();

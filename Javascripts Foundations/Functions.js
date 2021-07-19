console.log(address);
console.log(myname);

// function Declaration

function myname() {
  console.log("Logging Name");
}
//function Expressions
var address = function () {
  console.log("Logging Address");
};
var address = () => {
  console.log("Logging Address");
};
//Function Invocation/Call/Execution
myname();

address();

//parameterize functions
function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
}

//you can either use Array.from to convert Arguments into an Array, or use spread operator
function marry2(...args) {
  console.log(args);
}

marry("Satya", "Meghana");
marry2("Satya", "Meghana");

//Example 2
function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(
      "Can we access C from here, can we check in the scope before actually intializing " +
        c
    ); //No we cannot
    return function sayMyName() {
      var c = "c";
      return "JS Crash";
    };
  };
}

console.log(sayMyName()()());

//with eval() and with you can change scope chain,
// but this is not good practice, and the javascript '
// engine wouldnt be aware of this, the code might be deoptimized

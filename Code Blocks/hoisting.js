// Hoisting in Javascript is the phenomenon by which you can access variable and function without intializing them;
// not defined and undefined are two different things
//Hoisiting is a behavior in javascript where variables could be accessed before they are intialized
getName(); //Namaste Javascript
console.log(x); // Undefined
var x=7;
function getName()
{
  console.log("Hoisting In JavaScript");
}

console.log(getName()); // Namaste Javascropt
console.log(x);


//ways to declare a function

var getName2= function () {
  console.log("Anonymous Function");

}
var getName3=()=>{
  console.log("Closures");
}
getName3();
getName2();


// 2 Golden Rules:
// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made available


//console.log(); of a fucntion in the abpve case would return console.log inside function as well as Undefined

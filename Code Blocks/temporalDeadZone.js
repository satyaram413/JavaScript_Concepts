console.log(a);
let a=10;
a=20;
console.log(a);

// let a=30; --> cannot redeclare a let type variable

//for let variables you cannot use them before they are initialized, first line which is console.log(a) will give typereference error
// before intializing a is what called temporal dead zone.

//Let variables are stored in seperate space, and not in global space
//let keyword doesnt allow you to re intialize a variable, let is pretty much strict, however const is more stricter
//const variable should be intialized with the declarations


console.log(b)
var b=100;

//However for var type variables Hoisiting comes into place, the program will run without any errors, though the output would be Undefined

//Typereference error, SyntaxError and 

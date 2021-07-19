"use strict"; //refer notes
function weirdJS() {
  height = 50;
  return height;
}

weirdJS();

var JSisWeird = function jsFunction() {
  return "weird";
};
JSisWeird();
// jsFunction(); we cant access from global scope,
// it is nowhere to be seen in scope chain
//The function is enclosed in its own scope, jsFunction is actually added
//  to its own execution context variable environment
// Meaning the function can be accesed inside the function

console.log(teddy);
console.log(myFunction);
console.log(myFunctionDeclaration());
var myFunction = function () {
  console.log("My Function Expression");
};
function myFunctionDeclaration() {
  console.log("My Function Declaration");
}
var teddy = "bear";

//lesson 2

one = undefined;
var one = 1;
var one = 2;

console.log(one);

//lesson 3

var tec = "javascript";
var javascriptFunction = function () {
  console.log("Favorite Tech " + tec);
  var tec = "Java";
  console.log("Favorite Tech " + tec);
};

javascriptFunction();
//hoisting makes code unpredictable
//avoid hoisting as much as possible
//you can avoid hoisting by not using var keyword

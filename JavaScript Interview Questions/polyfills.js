//An implementation of map polyfill

const height = [1, 2, 3, 4];

const equationInCms = function (height) {
  return height * 12;
};
Array.prototype.heightCalculator = function (equation) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(equation(this[i]));
  }
  return output;
};
console.log(height.map(equationInCms));
console.log(height.heightCalculator(equationInCms));

//Test
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();

//Native Bind Method
let name = {
  firstName: "Satya",
  lastName: "Ram",
};
let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};
let printMyName = printName.bind(name);
printMyName();

//Binf Polyfill custom
//if we write any function using Function.prototype, then each and every method
// will have access to it

Function.prototype.myBind = function (...args) {
  let obj = this;
  // here in this method unlike the call and apply method,
  //  this variable points to function which called it, in this its printName
  return function () {
    obj.call(args[0]);
  };
};

let printMyName2 = printName.myBind(name);
printMyName2();

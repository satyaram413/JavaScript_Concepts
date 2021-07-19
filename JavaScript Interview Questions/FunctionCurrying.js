let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind();
multiplyByTwo(2, 3); // --> both the arguments will be taken from here
let multiplyByThree = multiply.bind(this, 3, 3); //--> both the arguments are taken from here
multiplyByThree(); // --> no arguments passed
let multiplyByFive = multiply.bind(this, 5); //-> first param will be taken from here, this is the suggested way to do things

multiplyByFive(4); // second from here
let multiplyBySix = multiply.bind(this, 6, 3); //-> if both the parameters are passed here then the bottom will be ignored
multiplyBySix(6);

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let c = multiply2(2);
c(3);

// function multiplyingByNumber(x, y, logic) {
//   return logic(x, y);
// }

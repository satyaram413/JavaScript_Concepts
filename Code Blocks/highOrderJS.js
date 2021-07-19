//passing in function as parameter to other function are called higher order functions
// The outer function that takes in a function is our higher-order function
//the function we insert is our callback function
function copuArrayAndManipulate(array, instructions) {
  //higher order functions
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
function multiplyBy2(input) {
  //callback function its getting called from some other function
  return input * 2;
}
const result = copuArrayAndManipulate([1, 2, 3], (input) => input * 2);

console.log(result);

// Higher Order functions
//Takes in a function or passes out a function
// just a term to describe these functons, any function that does it we call that-but there's nothing different about them inherently

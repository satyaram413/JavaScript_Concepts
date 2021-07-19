// function multiplyBy2(input) {
//   return input * 2;
// }
// const multiplyBy2 = (input) => {
//   return input * 2;
// };
// const multiplyBy2 = (input) => input * 2; // we can eliminate return in an arrow function
const multiplyBy2 = (input, input2) => input * 2; // well arrow is nothing but return

const output = multiplyBy2(3);
let result = [1, 2, 3, 5].map(multiplyBy2);
console.log(result);

let result2 = [1, 2, 3, 2, 5].map(console.log);
//When a function is called inside from map, for each iteration threee arguments are passed into the function currentValue, currentIndex, and the full array.

// the above is equivalent to
result2 = [1, 2, 3, 4, 5].map((val, index, array) =>
  console.log(val, index, array)
);

const out = ["1", "3"].map(parseInt(2, 10));
console.log(out); // use arrow functions wherever and whenever necessary

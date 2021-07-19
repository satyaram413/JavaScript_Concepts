// function multiply(a, b) {
//   return a * b;
// }
// function once(func) {
//   var f = func;
//   func = null;
//   return f.apply(this, arguments);
// }

// multiply_once = once(multiply);
// multiply_once(2, 3);
// multiply_once(3, 4);

// function add(a, b) {
//   return a + b;
// }

// function once(func) {
//   return function () {
//     var f = func;
//     func = null;
//     return f.apply(this, arguments);
//   };
// }

// add_once = once(add);
// add_once(3, 4); // 7
// console.log(add_once(3, 4));

function forEach(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    return callback(array[i]);
  }
}

console.log(forEach([1, 2, 3], multiplyBy3));
function multiplyBy3(num) {
  return num * 3;
}

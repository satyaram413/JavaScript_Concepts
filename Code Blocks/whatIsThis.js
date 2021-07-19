// // const getUid = (() => {
// //   let uid = 0;
// //   return () => ++uid;
// // })();
// // var b = getUid;
// // console.log(b);
// // console.log(getUid());
// // console.log(getUid());

// function test() {
//   return new Promise(function (resolve, reject) {
//     throw new Error("Wh");
//   })
//     .catch(function (error) {
//       console.log("Error Detected");
//     })
//     .then(function () {
//       console.log("Next");
//     });
// }

// test().then(function () {
//   console.log("Pr");
// });

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     (function () {
//       console.log("this.foo" + this.foo);
//       console.log(self.foo);
//     })();
//   },
// };
// myObject.func();

function func() {
  console.log("No Parameters");
}
function func(a) {
  console.log("Output is " + a);
}
func();
func(1);
func(1, 2);

// // let a = [1, 2, 3, 4, 5];

// // delete a[3];
// // console.log(a.length);

// // // a.forEach((r) => {
// // //   console.log(r);
// // //   if (r === 4) {
// // //     break;
// // //   }
// // // });

// // let name = "Mark";
// // let user = {
// //   name: "M",
// //   hi() {
// //     return this.name;
// //   },
// // };
// // let hi = user.hi;
// // let userName = hi();
// // console.log(userName);

// // var x = 1;
// // var output = (function () {
// //   delete x;
// //   return x;
// // })();
// // console.log("whoa" + output);

// // function test2() {
// //   console.log(a);
// //   console.log(foo());
// //   var a = 1;
// //   function foo() {
// //     return 2;
// //   }
// // }
// // test2();

// // const arr = [10, 20, 30, 40];
// // for (var i = 0; i < arr.length; i++) {
// //   setTimeout(function () {
// //     console.log(i + " " + arr[i]);
// //   }, 3000);
// // }

// let s = "a3c9b2c1";
// let ino = "";
// for (let i = 0; i < s.length; i++) {
//   if (isNaN(s[i])) {
//     if (!ino.includes(s[i])) {
//       ino = ino + s[i];
//     } else {
//       let lastIndexOf = ino.indexOf(s[i]);
//       while (true) {
//         console.log("dada");
//         if (isNaN(s[lastIndexOf + 1])) {
//           break;
//         }
//         lastIndexOf++;
//       }
//       //   for (let index = lastIndexOf; index < isNaN(s[index]); index++) {
//       //     console.log(s[index]);
//       //   }
//     }
//   } else {
//     ino = ino + s[i];
//   }
// }

// console.log(ino);
// let n = 6;
// let m = 20;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= m; j++) {
//     if (i === 1 || i === n || j === 1 || j === n) {
//       console.log("*");
//     } else {
//       console.log(" ");
//     }
//   }
// }

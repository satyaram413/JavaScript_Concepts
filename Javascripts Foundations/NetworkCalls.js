/*function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

//usage:
readTextFile(
  "/media/satya/Miscellaneous/Programming/Concepts/JavaScript's Concept/Javascripts Foundations/sampleresponse.json",
  function (text) {
    var data = JSON.parse(text);
    console.log(data);
  }
);*/

const a = "" - 1 + 0;
const b = true + false;
console.log(a / b);

function Person(name) {
  this.name = name;
  return {
    name: "John",
  };
}
var emp = new Person("Mark");
console.log(emp.name);

(function () {
  var objA = {
    foo: "foo",
  };
  var objB = {
    foo: "foo",
  };
  console.log(objA == objB);
  console.log(objA === objB);
  //not going to get an error
  // inside IIFE all are block scoped or function scope
})();

var fullname = "satya";
var obj = {
  fullname: "satya aka",
  prop: {
    fullname: "maka Sitaram",
    getFullName: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

function y() {
  const arr = [10, 20, 30, 40];
  for (var i = 0; i <= arr.length; i++) {
    setTimeout(() => {
      console.log(i + " " + arr[i]);
    }, i * 1000);
  }
}
y();

// var foo = function bar() {
//   return 12;
// };
// typeof bar();

const list = new Array(0, 1, 2, 3);
list.forEach((r) => console.log(r));

const fooo1 = () => {
  return {
    bar: "hello",
  };
};
const fooo2 = () => {
  return {
    bar: "hello",
  };
};

console.log(fooo2());
console.log(fooo1());

class Waiter {
  async wait() {
    return await Promise.reject(1);
  }
}
let temp = new Waiter();
temp.wait().then(
  (data) => {
    console.log(data + 1);
  },
  (data) => {
    console.log(data + 2);
  }
);

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("My Error");
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);

var s = "satya";
console.log("Lol" + s.substr(0, 2));

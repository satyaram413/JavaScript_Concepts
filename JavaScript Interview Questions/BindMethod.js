let name = {
  firstName: "Sitaram",
  lastName: "Maka",
};
let printFullName = function (city) {
  console.log(this.firstName + " " + this.lastName + " " + city); //this refers to name object
};
console.log(typeof printFullName);
printFullName.call(name, "Tadepalligudem");

let name2 = {
  firstName: "Aishwarya",
  lastName: "Nandam",
};
let printName = printFullName.bind(name2, "Ravulapalem"); // doesnt call it immediately
printName();

//We can also use bind in case of callbacks and eventHandlers

const counter = {
  count: 0,
  incrementCounter: function () {
    console.log(this);
    this.count++;
  },
};
document
  .querySelector(".btn")
  .addEventListener("click", counter.incrementCounter.bind(counter));

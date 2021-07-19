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
printFullName.call(name2, "Ravulapalem");

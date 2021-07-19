let name = {
  firstName: "Sitaram",
  lastName: "Maka",
};
let printFullName = function (city, currentPlace) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      city +
      " currently living in " +
      currentPlace
  ); //this refers to name object
};
console.log(typeof printFullName);
printFullName.apply(name, ["Tadepalligudem", "Hyderabad"]);

let name2 = {
  firstName: "Aishwarya",
  lastName: "Nandam",
};
printFullName.apply(name2, ["Ravulapalem", "America"]);

const a = [1, 2, 3, 4];
const mapFunction = a.map((r) => r * 5);
console.log(mapFunction);
const filterFunction = a.filter((r) => r % 2 == 0);
console.log("Filter Function " + filterFunction);
const findFunction = a.find((element) => element > 2); //return only one element
console.log(findFunction);
const findIndex = a.findIndex((r) => r > 2); //returns index of based on condition
console.log(findIndex);
const indexOfFunction = a.indexOf(4);
console.log(indexOfFunction);
const fillFunction = a.fill(5, 1);
console.log(fillFunction);
const someFunction = a.some((r) => r % 2 === 0);
console.log(someFunction);

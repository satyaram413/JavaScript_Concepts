function multiMax(first, ...remaining) {
  console.log(remaining);
}
multiMax(1, 2, 4, 5);

function defaultAction(being, actionItem = " fights") {
  return being + actionItem;
}
console.log(defaultAction("Human", " Dancing"));
console.log(defaultAction("Human"));
function emptyArguments() {
  console.log(arguments);
}

emptyArguments("HashNode");

function spreadOperator(a, b, c) {
  return a + b + c;
}
let arr = [2, 34, 6];
console.log(spreadOperator(...arr));

function yourFullName(a, b, c) {
  return "First Name: " + a + "\n" + "Last Name: " + b;
}
const names = ["Hash", "Node"];
console.log(yourFullName(...names));

let obj = [1, 2, 4];
let objClone = [...obj, 7, 8, 9];
console.log(objClone);

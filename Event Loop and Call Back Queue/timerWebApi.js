// We are interacting with a world outside of Javascript now- so we need rules
function printNamaste() {
  console.log("Hello");
}

setTimeout(printHello, 100);
console.log("Me First!");

//Predict your output for below code

function printHello() {
  console.log("hello");
}
function blockFor1Sec() {
  //lets block th thread for one sec or so
}
setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me First");

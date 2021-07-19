function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockHelloFor300ms() {
  // Nothing much just a function which block for 300 ms synchronous for loop or something
}

setTimeout(printHello, 0);
const futureData = fetch("http://dummy.restapiexample.com/api/v1/employee/1");
futureData.then(display).catch((r) => console.log("Message " + ":" + r));

blockHelloFor300ms();
console.log("Me First");

myfunction = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myfunction
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is inside catch " + message);
  });

function display(data) {
  console.log(data.type);
}
const futureData = fetch("http://dummy.restapiexample.com/api/v1/employee/1");
futureData.then(display).catch((r) => console.log("Message " + ":" + r));
// futureData.Promise();

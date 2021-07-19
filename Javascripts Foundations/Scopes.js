//function scope
//vs
// Block Scope

if (5 > 4) {
  var blockv = 121;
}
console.log(blockv); // works fine

if (5 > 4) {
  let letItSecret = 121;
}
// console.log(letItSecret); //creates a problem

//Example 2

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(" final " + i);
}

loop();

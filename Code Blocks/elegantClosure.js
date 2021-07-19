function outer() {
  let counter = 0;
  let iAmAVaraiable = 0;
  // var mygu = 90;
  function nextInner() {
    function incrementCounter() {
      counter++;
      console.log(mygu);
    }
    return incrementCounter;
  }

  return nextInner();
}
var mygool;
let mygu;
mygu = "poo";
let myNewFucntion = outer();
console.log(myNewFucntion);
myNewFucntion();
myNewFucntion();
let newfunction = myNewFucntion;
newfunction();

//we can access whicha re c
//Javascript is Persistent lexically or static scope reference data

// its the backpack as a result of Javascript being a lexically Scoped language
// CLosed over Variable Environment
// Backpack
// Closure

//Baclkpacks are also called Closures, every time we call a function and assign it to a variable, we also bring hidden scope variables attached to it, based on the reference made
//Individual Backpacks- If we run outer again and store th returned incrementCounter function definition in some other function this new incrementCounter function was
// created in a new execution context adn therefore has  a brand new independent backpack

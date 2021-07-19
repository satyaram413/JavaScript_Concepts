
function x() {
  var a=25;
function y() {
  console.log(a);

}
y();
}
x();

function c() {
let c=25;
  function d() {
    function y() {
      console.log(c);
    }
    y();
  }

  return  d;
}
var z=c();
console.log(z)
z();

//Closure are functions along with its lexical scope bundled together forms a closures

// Uses of Closures:
// -Module Design Pattern
// Currying
// Function like Once
// memoize
// maintaining statein async world
// setTimeouts
// Iterators
// and many more...


// Lexical Scoping defines how variable names are resolved in nested functions:
 // inner functions contain the scope of parent functions even if the parent function has returned.
//A function along with references to its outer environment together forms Closures
// Closure is a combination of funcgtion and its lexical scope bundled together
//Each and every function has access to its lexical environment,
function outer() {
  var a =30;
  function inner()
  {console.log(a);

  }
  return inner;
}

outer()(); //outer()() === z=outer(); z();

function add(x){
  return function(y){
    return x + y;
  };
}

var addTwo = add(2);

addTwo(4) === 6;
add(3)(4) === 7;


//Data Hiding
function counter() {
  var count=0;
  return function incrementcounter()
  {
    count++;
    console.log(count);
  }
}
var counter1= counter();
counter1();
counter1();

var counter2= counter();
counter2();

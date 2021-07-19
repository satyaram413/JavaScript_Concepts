//Constructor Function can have
// Constructor functions technically are regular functions. There are two conventions though:
//
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.
function Counter()
{

//   Inside a function, we can check whether it was called with new or without it, using a special new.target property.
//
// It is undefined for regular calls and equals the function if called with new:
  // console.log(new.target);
if(!new.target)
{
  return new Counter();
}
  var count=0;
  this.incrementcounter=function () {
    count++;
    console.log(count);
  }
this.decrementcounter= function () {
  count--;
  console.log(count);
}
}
Counter().incrementcounter();
var counter1= new Counter();
counter1.incrementcounter();
counter1.decrementcounter();

var counter2= new Counter();
counter2.incrementcounter();
counter2.incrementcounter();

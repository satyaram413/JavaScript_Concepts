 function x() {
var i=1;
setTimeout(function () {
console.log(i);
},3000);
console.log("Set Timeout");
 }
 x();


//
 function y() {
   for(let i=1; i<=5;i++)

{
  setTimeout(()=> {
    console.log(i);
  },i*1000);
}
 }
y();


//solving the problem with var instead of let, here we have created wrapped
// setTimeout inside a closure, now, whenever the setTImeout is called, it takes the lexical scoped variable in this case, new value of i after every loop

function z() {
  for(var i=1;i<=5;i++)
  {
    function close(x) {
      setTimeout(function ()
    {
      console.log(x);

    },x*1000)

    }
    close(i)
  }

}
z();

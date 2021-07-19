
//There are four scopes block scope, Script Scope, Global Scope, Closure Scopes
{
  //Compound Statement-> Block
  // Ex:
var a =10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);


}
console.log(a);
// console.log(b);
// console.log(c);
// output: 10,20,30, 10 error (because you cannot access let and const outside of block scope, in the above example but you can access var types )
//Shadowing

let d=20;
var e=50;
{
var e =10;
let d=40; //block scope
const f=30;
console.log(e);
console.log(d);
console.log(f);


}

console.log(d);
console.log(e);


//output: 10,40,30, 20 const and let variables can be shadowed only if the variable is redeclared in block scope meaning globally declared varaibles of these types cannot be modified by variables declared
// in block scopes, or vice versa, globally declared let & const variables are stored in SCRIPT Scope, and variables inside block are stored in block scopes
//variables of type let and const defined outside block would be stored in Script scope
//var type variables will always be stored in Global Scope, no matter where they are defined, even if they are defined in Blocks, Shadowing is possible only for
// var types, the value of var will be modified easily

let object = {
  name: "Sitaram",

  address: "Tadepalligudem",
  getIntro: function (params) {
    console.log("Hello I am " + this.name + " " + this.address);
  },
};

object.getIntro();
console.log(object.__proto__); //returns Object.prototype
console.log(object.getIntro().__proto__); //returns undefined
console.log(object.__proto__.__proto__); // returns null

let arr = [1, 2, 3];

console.log(arr.__proto__);
//proto is the object here and it has several properties the above is same as
console.log(arr.__proto__ == Array.prototype);

//Since __proto__ is an object and every object in javascript has a prototype
//and when you do

console.log(arr.__proto__.__proto__); //prototype chaining
//which is same as
console.log(Object.prototype);

//but
console.log(arr.__proto__.proto__.proto__ == null);
//because Object.prototype.prototype does not exit and its null, this is the end
//of prototype chaining

//lets try it out it with the object we created

console.log(object.__proto__);
//gives us Object.prototype, because we have created an object here.
//Now when we try to do
console.log(object.__proto__.__proto__);
//the above gives us null, as Object.prototype.prototype is null

//Similarly for a function

function myFun() {
  console.log("Just a function");
}
console.log(myFun.__proto__ == Function.prototype);

console.log(myFun.__proto__.__proto__ == Object.prototype);

//Conclusion: Everything in javascript is an Object

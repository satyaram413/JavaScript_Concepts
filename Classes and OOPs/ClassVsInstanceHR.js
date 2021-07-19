function Person(initialAge) {
  if (initialAge < 0) {
    this.initialAge = 0;
    console.log("Not Eligible");
  } else {
    this.initialAge = initialAge;
  }
}

Person.prototype.amIOld = function () {
  if (this.initialAge < 13) console.log("Young mate");
  else if (this.initialAge >= 13 && this.initialAge < 18)
    console.log("Teenager");
  else console.log("older");
};
Person.prototype.IncrementAge = function () {
  this.initialAge++;
};

var p = new Person(2);
console.log(p.__proto__);
p.amIOld();
p.IncrementAge();

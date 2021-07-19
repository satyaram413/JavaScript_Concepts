//myBind is a custombind,
//if we write any function using Function.prototype, then each and every method
// will have access to it, meaning any function type created in this file will have myBind available inside __proto__ object
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1); //returns all other elements from 1 index;
  // here in this method unlike the call and apply method,
  //  this variable points to function which called it, in this its printName
  return function (...args2) {
    //obj.call(args[0], params); call doesn't apply for array of second argument, so we will use apply instead.
    obj.apply(args[0], [...params, ...args2]); //-> concatenating two arrays es6 syntax
  };
};
let name = {
  firstName: "Satya",
  lastName: "Ram",
};
let printName = function (hometown, workplace, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " Hometown " +
      hometown +
      " Currently Living in " +
      workplace +
      " " +
      state
  );
};
let printMyName2 = printName.myBind(name, "Tadepalligudem", "Hyderabad");
printMyName2("Andhra Pradesh"); //lets say i want to pass some argument here, this will work with function that is being returned by custom bind method

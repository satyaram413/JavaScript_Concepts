//IIFE --to avoid global variable issue Immediately invoked Function Expression
// IIFE- popular design pattern used by backbonejs below is an example

//function expression not function declaration because we have started it with ()
(function () {
  var objA = {
    foo: "foo",
  };
  var objB = {
    foo: "foo",
  };
  console.log(objA == objB);
  console.log(objA === objB);
  //not going to get an error
  // inside IIFE all are block scoped or function scope
})();

// function ley()
// {

// }(); Not going to run because a function declaration cannot be invoked as soon as it is declared
(function (OMG) {
  OMG("h1").click(function () {
    OMG("h1").hide();
  });
})(jQuery);

(function () {})(); //This is gonna work too, as this is also function expression

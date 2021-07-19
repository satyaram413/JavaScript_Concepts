function a() {
  // console.log(b);
  c();


  function c() {
    console.log(b);

  }
}
let  b=10;
a();


//

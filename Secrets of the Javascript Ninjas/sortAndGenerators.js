const myArray = [1, "dada", 456, 23, 45, "satya"];
console.log(myArray.sort());
const pillow = ["myname", "ram", "apple"];
console.log(pillow.sort());

//To be learned in the coming sections

function* IdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
  console.log(id);
}

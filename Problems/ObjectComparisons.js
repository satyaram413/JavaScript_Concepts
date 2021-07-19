let author = "Satya";
let title = "Cracking Coding";
let book = {
  title,
  author,
};
let book2 = {
  title,
  author: "Satya",
};

console.log(book2);
//Referential Comparisons
console.log(book == book2); //-> false
console.log(book === book2); //->false

//Shallow Compaisons
function ShallowComparisons(book, book2) {
  //   Object.keys(book).forEach((key) => {
  //     if (book[key] != book2[key]) {
  //       return false;
  //     }
  //   });
  let keys1 = Object.keys(book);
  let keys2 = Object.keys(book2);

  for (let key of keys1) {
    if (keys1.length != keys2.length) {
      return false;
    }
    if (book[key] != book2[key]) {
      return false;
    }
  }
  return true;
}

console.log(ShallowComparisons(book, book2));

//Manual Comparisons
var manualComparisons = (book, book2) => {
  return book.author === book2.author;
};
console.log(manualComparisons(book, book2));

//Deep Comaprison
let movie = {
  name: "Bahuballi",
  director: "Rajamouli",
  actor: {
    hero: "Prabhas",
    heroine: "Anushka",
  },
};
// let movie2 = {
//   name: "Bahuballi",
//   director: "Rajamouli",
//   actor: {
//     hero: "Prabhas",
//     heroine: "Anushka",
//   },
// };
let movie2 = {
  name: "100% Love",
  director: "Sukumar",
  actor: {
    hero: "Chaitanya",
    heroine: "Tamannah",
  },
};

let deepComparison = (movie, movie2) => {
  let keys = Object.keys(movie);
  let keys2 = Object.keys(movie2);
  if (keys.length != keys2.length) {
    return false;
  }
  for (const key of keys) {
    const val1 = movie[key];
    const val2 = movie2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepComparison(val1, val2)) ||
      (!areObjects && val1 != val2)
    )
      return false;
  }
  return true;
};
function isObject(object) {
  return object != null && typeof object === "object";
}
console.log(deepComparison(movie, movie2));

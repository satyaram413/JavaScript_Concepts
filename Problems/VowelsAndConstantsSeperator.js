function vowelsAndConsonantsSeperator(myString) {
  let vowels = "";
  let consonants = myString;
  for (let i = 0; i < myString.length; i++) {
    let x = myString[i];
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
      vowels += x;
      consonants = consonants.replace(x, "");
    }
  }
  return vowels + "," + consonants;
}
console.log(vowelsAndConsonantsSeperator("wassup"));
console.log(
  "Vowels: " +
    vowelsAndConsonantsSeperator("wassup").split(",")[0] +
    " Consonants: " +
    vowelsAndConsonantsSeperator("wassup").split(",")[1]
);

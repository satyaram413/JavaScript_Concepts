function newPassword(a, b) {
  // Write your code here
  let minLength = b.length;
  let whichOne = "b";
  let newPassword = "";
  if (minLength > a.length) {
    minLength = a.length;
    whichOne = "a";
  }
  for (let index = 0; index < minLength; index++) {
    newPassword = newPassword + a[index] + b[index];
    console.log(newPassword);
  }
  if (whichOne == "b") {
    newPassword = newPassword + a.substr(minLength, a.length + 1);
  } else {
    newPassword = newPassword + b.substr(minLength, b.length + 1);
  }
  return newPassword;
}
console.log(newPassword("abc", "def"));

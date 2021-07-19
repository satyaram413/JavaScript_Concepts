let getLetter = (s) => {
  let letter = s[0];
  // Write your code here
  let array = [
    ["e", "a", "i", "o", "u"],
    ["b", "c", "d", "f", "g"],
    ["h", "j", "k", "l", "m"],
    ["n", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"],
  ];

  let index = array.map((x) => {
    if (x.indexOf(letter) != -1) {
      return 0;
    } else {
      return x.indexOf(letter);
    }
  });

  debugger;
  switch (index.indexOf(0)) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    default:
      return "error";
  }
};

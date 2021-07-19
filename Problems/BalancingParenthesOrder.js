function balanceStack(arr) {
  let stack = [];
  if (arr.length == 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (x == "{" || x == "(" || x == "[") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;

    switch (arr[i]) {
      case ")":
        x = stack.pop();
        if (x == "{" || x == "[") {
          return false;
        }
        break;
      case "}":
        x = stack.pop();
        if (x == "(" || x == "[") {
          return false;
        }
      case "]":
        x = stack.pop();
        if (x == "{" || x == "(") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
}
console.log(balanceStack("[()]{}{[()()]()}"));

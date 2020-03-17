module.exports = function check(str, bracketsConfig) {
  let n = 0;
  let bracket;
  let OpenBrackets = [];
  let CloseBrackets = [];
  for (let i = 0; i < str.length; i++) {
    bracket = str[i];
    if (bracket === '(' || bracket === '[' || bracket === "{") {
      OpenBrackets.push(bracket);
    } else if (bracket === ')' || bracket === ']' || bracket === "}") {
      CloseBrackets.push(bracket);
    }
  }
  if (OpenBrackets.length === CloseBrackets.length) {
    return true;
  } else {
    return false;
  }
}

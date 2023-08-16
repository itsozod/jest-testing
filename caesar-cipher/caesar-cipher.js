function caesarCipher(str) {
  if (typeof str !== "string") {
    return "Must be a string";
  }
  let solved = "";
  for (let i = 0; i < str.length; i++) {
    let codeNum = str[i].charCodeAt();
    if (codeNum >= 65 && codeNum <= 77) {
        solved += String.fromCharCode(codeNum + 13);
    } else if (codeNum => 78 && codeNum <= 90) {
        solved += String.fromCharCode(codeNum - 13);
    }
  }
  return solved;
}
console.log(caesarCipher("A"));
module.exports = caesarCipher;

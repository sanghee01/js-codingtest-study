const [a, b] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a + b);

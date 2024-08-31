const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0];
const b = input[1];

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);

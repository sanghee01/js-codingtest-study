const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const list = input[1].split("").map(Number);

const sum = list.reduce((a, b) => a + b);

console.log(sum);

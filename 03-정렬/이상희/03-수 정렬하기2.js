let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

input = input
  .map(Number)
  .sort((a, b) => a - b)
  .join("\n");

console.log(input);

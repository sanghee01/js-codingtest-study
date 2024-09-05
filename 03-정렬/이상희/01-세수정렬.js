const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

console.log(input);

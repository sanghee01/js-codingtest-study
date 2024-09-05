const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(list[K - 1]);

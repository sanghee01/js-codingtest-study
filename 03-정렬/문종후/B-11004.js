const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[K - 1]);

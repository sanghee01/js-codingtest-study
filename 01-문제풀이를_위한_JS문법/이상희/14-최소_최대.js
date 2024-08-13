const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);

let min = list[0];
let max = list[0];

for (let i = 1; i < N; i++) {
  if (list[i] < min) min = list[i];
  if (list[i] > max) max = list[i];
}

console.log(min, max);

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const subjects = input[1].split(" ").map(Number);
const MAX = Math.max(...subjects);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += (subjects[i] / MAX) * 100;
}

console.log(sum / N);

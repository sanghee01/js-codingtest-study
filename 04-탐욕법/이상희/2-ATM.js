const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let totalSum = 0; // 총 시간
let currentSum = 0; // 누적 시간

for (let i = 0; i < N; i++) {
  currentSum += list[i];
  totalSum += currentSum;
}

console.log(totalSum);

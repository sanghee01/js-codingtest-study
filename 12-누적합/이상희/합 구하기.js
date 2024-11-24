const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const M = Number(input[2]);

const prefixSum = [0];
let sumValue = 0;

for (let num of arr) {
  sumValue += num;
  prefixSum.push(sumValue);
}

let answer = "";
for (let i = 3; i < M + 3; i++) {
  let [left, right] = input[i].split(" ").map(Number);
  answer += prefixSum[right] - prefixSum[left - 1] + "\n";
}

console.log(answer);

//백준 합구하기
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");
const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const M = Number(input.shift());
let prefix = [0];
let sum = 0;
for (let i = 0; i < N; i++) {
  sum = sum + arr[i];
  prefix.push(sum);
}

for (let i = 0; i < M; i++) {
  let [left, right] = input[i].split(" ").map(Number);

  console.log(prefix[right] - prefix[left - 1]);
}

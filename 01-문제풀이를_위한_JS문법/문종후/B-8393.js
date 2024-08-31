//https://www.acmicpc.net/problem/8393
//합
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let sum = 0;
for (let i = 1; i <= input[0]; i++) {
  sum += i;
}
console.log(sum);

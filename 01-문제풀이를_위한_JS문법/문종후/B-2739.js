//https://www.acmicpc.net/problem/2739
//구구단
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
for (let i = 1; i <= 9; i++) {
  console.log(`${input[0]} * ${i} = ${input[0] * i}`);
}

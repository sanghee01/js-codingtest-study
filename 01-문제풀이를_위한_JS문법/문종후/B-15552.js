//https://www.acmicpc.net/problem/15552
//빠른 A+B
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let answer = "";

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer = answer + (a + b) + "\n";
}

//반복문 내부콘솔 더하고 콘솔(시간차이)

console.log(answer);

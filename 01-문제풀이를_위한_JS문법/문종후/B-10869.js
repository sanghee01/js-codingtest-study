//https://www.acmicpc.net/problem/10869
//사칙연산
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

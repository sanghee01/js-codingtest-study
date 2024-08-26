//https://www.acmicpc.net/problem/2588
//곱셈
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
const a = input[0];
const b = String(input[1]);
const b0 = b[0];
const b1 = b[1];
const b2 = b[2];

console.log(a * Number(b2));
console.log(a * Number(b1));
console.log(a * Number(b0));
console.log(a * Number(b2) + a * Number(b1) * 10 + a * Number(b0) * 100);

//https://www.acmicpc.net/problem/10998
// AXB

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
const a = input[0];
const b = input[1];
console.log(a * b);

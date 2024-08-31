//https://www.acmicpc.net/problem/1546
//평균
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let max = Math.max(...arr);
let newarr = arr.map((v) => (v / max) * 100);
let sum = newarr.reduce((a, b) => a + b);
console.log(sum / N);

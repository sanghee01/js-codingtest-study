//https://www.acmicpc.net/problem/11720
//숫자의합
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split("").map(Number);
const sum = arr.reduce((A, b) => A + b);
console.log(sum);

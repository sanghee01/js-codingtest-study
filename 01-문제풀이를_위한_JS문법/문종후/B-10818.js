//https://www.acmicpc.net/problem/10818
//최소,최대
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(min, max);

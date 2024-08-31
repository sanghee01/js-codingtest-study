//https://www.acmicpc.net/problem/3052
//나머지

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}

const hash = new Set(arr);
console.log(hash.size);

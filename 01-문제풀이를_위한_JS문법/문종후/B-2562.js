//https://www.acmicpc.net/problem/2562
//최댓값
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n").map(Number);
let max = 0;
let index = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    index = i;
  }
}
console.log(`${max}\n${index + 1}`);

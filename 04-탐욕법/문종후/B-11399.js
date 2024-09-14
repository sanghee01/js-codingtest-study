const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const N = input.shift();

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let reducesum = 0;

for (let i = 0; i < arr.length; i++) {
  reducesum = reducesum + arr[i];
  answer = answer + reducesum;
}
console.log(answer);

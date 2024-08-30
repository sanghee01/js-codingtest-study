const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
const N = input[0];
const K = input[1];
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}
let n = 0;
let answer = [];
while (arr.length) {
  n++;
  if (n % K === 0) {
    answer.push(arr.shift());
  } else {
    arr.push(arr.shift());
  }
}
console.log(`<${answer.join(", ")}>`);

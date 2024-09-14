const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let x = input[0].split("-");
let answers = [];
for (let i = 0; i < x.length; i++) {
  let arr = x[i].split("+").map(Number);
  let sum = arr.reduce((a, b) => a + b);
  answers.push(sum);
}
let answer = answers.reduce((a, b) => a - b);
console.log(answer);

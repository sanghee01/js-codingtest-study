// 백준 1541 실버2
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const formula = input.split("-");

let answer = [];

formula.forEach((item) => {
  if (item.includes("+")) {
    let sum = 0;
    item = item.split("+").map(Number);
    item.forEach((i) => (sum += i));
    answer.push(sum);
  } else {
    answer.push(Number(item));
  }
});

console.log(answer.reduce((prev, cur) => prev - cur));

// 백준 11399 실버4

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const arr = input[1].sort((a, b) => a - b);

let temp = 0;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  temp = temp + arr[i];
  answer += temp;
}

console.log(answer);

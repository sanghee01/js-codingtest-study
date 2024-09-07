// 백준 18870 실버 2
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const arr = [...new Set(input[1])].sort((a, b) => a - b);
let answer = "";

const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], i);
}

for (x of input[1]) {
  answer += map.get(x) + " ";
}

console.log(answer);

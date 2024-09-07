// 백준 1427 실버 5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const arr = input.split("").sort((a, b) => b - a);
console.log(arr.join(""));

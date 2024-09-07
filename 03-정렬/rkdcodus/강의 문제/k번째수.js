// 백준 11004 실버5

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const K = input[0][1] - 1;
const arr = input[1];
arr.sort((a, b) => a - b);
console.log(arr[K]);

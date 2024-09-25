// 백준 11047

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let count = 0;
let k = input[0][1];

input
  .slice(1)
  .reverse()
  .map((n) => {
    if (k % n[0] < k) count += parseInt(k / n[0]);
    k = k % n[0];
  });

console.log(count);

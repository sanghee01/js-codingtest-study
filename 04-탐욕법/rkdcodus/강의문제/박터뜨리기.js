// 백준 19939 실버4
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = input[0]; // 공의 수
const k = input[1]; // 팀의 수
const minN = k + (k * (k - 1)) / 2;

if (n < minN) console.log(-1);
else if ((n - minN) % k === 0) console.log(k - 1);
else console.log(k);

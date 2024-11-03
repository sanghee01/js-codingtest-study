/**
 * 2670 실4
 * ni = Math.max(ni-1 * i, i-1 * i) 실패
 * ni = Math.max(ni-1*i, i)
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const dp = [];
for (let i = 1; i <= n; i++) {
  dp.push(input[i]);
}

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}

console.log(Math.max(...dp).toFixed(3));

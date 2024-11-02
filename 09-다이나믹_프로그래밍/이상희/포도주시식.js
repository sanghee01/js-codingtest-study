let arr = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = arr.shift();
const dp = new Array(n).fill(0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1];
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2]);
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3]);
}

console.log(dp[n - 1]);

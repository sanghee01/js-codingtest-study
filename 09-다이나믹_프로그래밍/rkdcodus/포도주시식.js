// 2156 백준 실1
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

/*
6 10 13 9 8 1
dp 1 = 6
dp 2 = 16 = 10 + 6
dp 3 = 23 = 10 + 13 => Max(dp1+ 10, dp2 + 13)
dp 4 = 28 = 6 + 13 + 9 => Max(dp1 + 13 + 9, dp2 + 9, dp3)
dp 5 = Max(dp2 + 9 + 8, dp3 + 8, dp4)
16+17=33, 23 + 8 = 31, 28

dp[i] = Max(dp[i-3] + i-1 + i, dp[i-2] + i, dp[i-1])
*/
const n = input[0];
const dp = new Array(10001).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];
dp[3] = Math.max(input[2] + input[3], input[1] + input[2], input[3] + input[1]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i], dp[i - 1]);
}

console.log(dp[n]);

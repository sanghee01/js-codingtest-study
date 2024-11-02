// 2302 실1

/**
 * dp[i] = dp[i-1] + dp[i-2]
 * i가 vip일 경우 i와 i+1은 i-1과 같음.
 * dp[i] = dp[i-1]
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const dp = new Array(n + 1).fill(0);

for (let i = 2; i < input.length; i++) {
  const n = input[i];
  dp[n] = -1;
  dp[n + 1] = -1;
}

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  if (dp[i] === -1) dp[i] = dp[i - 1];
  else dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n]);

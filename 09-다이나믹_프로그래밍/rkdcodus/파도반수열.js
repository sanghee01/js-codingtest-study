const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const testcase = input[0];

/**
 * a1, 2, 3 = 1
 * ai = ai-2 + ai-3
 */

const dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= Math.max(...input.slice(1)); i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= testcase; i++) {
  const n = input[i];
  console.log(dp[n]);
}

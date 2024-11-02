let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const dp = [];

for (let i = 0; i < n; i++) {
  dp.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) dp[i][j] += dp[i - 1][j];
    else if (j === i) dp[i][j] += dp[i - 1][j - 1];
    else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}

console.log(Math.max(...dp[n - 1]));

// 1932 실1

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const dp = input.slice(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let left = 0;
    if (j !== 0) left = dp[i - 1][j - 1];
    let right = 0;
    if (j !== i) right = dp[i - 1][j];

    dp[i][j] += Math.max(left, right);
  }
}

console.log(Math.max(...dp[n - 1]));

/**
 * 1149 실1
 * 실패
 * dp를 어떤 구조로 할 것인가?가 관건이라 생각.
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const arr = input.slice(1);
const dp = Array.from({ length: n }, () => Array.from({ length: 3 }, () => Infinity));

dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  // i번째 집에서 j번째 색 고르기
  for (let j = 0; j < 3; j++) {
    // i-1번째 집에서 k번째 색 고르기
    for (let k = 0; k < 3; k++) {
      if (j != k) dp[i][j] = Math.min(dp[i][j], arr[i][j] + dp[i - 1][k]);
    }
  }
}

console.log(Math.min(...dp[n - 1]));

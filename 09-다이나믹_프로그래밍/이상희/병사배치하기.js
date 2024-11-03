const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).reverse();

const dp = new Array(N).fill(1); // 각 요소를 포함한 LIS의 길이를 저장하는 배열

// 가장 긴 증가하는 부분 수열(LIS) 알고리즘 수행
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // 증가하는 부분 수열 조건
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1); // LIS 길이 갱신
    }
  }
}

console.log(N - Math.max(...dp));

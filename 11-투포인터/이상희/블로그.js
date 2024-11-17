const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let intervalSum = 0;
let maxCount = 1;

// 첫 X일 간의 방문자 수 합 구하기
for (let i = 0; i < X; i++) {
  intervalSum += visitors[i];
}
let maxSum = intervalSum;

for (let i = X; i < N; i++) {
  intervalSum += visitors[i] - visitors[i - X]; // 구간을 한 칸 오른쪽으로 옮기기

  if (intervalSum > maxSum) {
    maxSum = intervalSum;
    maxCount = 1; // 새로운 최대값이 나온 경우, 카운트를 1로 초기화
  } else if (intervalSum === maxSum) {
    maxCount++; // 최대값이 동일한 경우, 카운트 증가
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(maxCount);
}

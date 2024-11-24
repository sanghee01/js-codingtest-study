const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const balls = [];

// 공 데이터 입력
for (let i = 1; i <= N; i++) {
  const [color, size] = input[i].split(" ").map(Number);
  balls.push({ index: i - 1, color, size });
}

// 크기 기준 정렬
balls.sort((a, b) => a.size - b.size);

const results = Array(N).fill(0); // 결과 배열
const colorSums = Array(N + 1).fill(0); // 색상별 누적합
let smallerBallIndex = 0;
let totalSizeSum = 0;

// 결과 계산
for (let i = 0; i < N; i++) {
  const currentBall = balls[i];

  // 현재 공보다 크기가 작은 공들 처리
  while (balls[smallerBallIndex].size < currentBall.size) {
    totalSizeSum += balls[smallerBallIndex].size;
    colorSums[balls[smallerBallIndex].color] += balls[smallerBallIndex].size;
    smallerBallIndex++;
  }

  // 결과 계산: 전체 크기 합 - 현재 공의 색상 크기 합
  results[currentBall.index] = totalSizeSum - colorSums[currentBall.color];
}

console.log(results.join("\n"));

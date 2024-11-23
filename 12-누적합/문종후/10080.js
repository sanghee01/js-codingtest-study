const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const balls = input.slice(1).map((line, index) => {
  const [color, size] = line.split(" ").map(Number);
  return { color, size, index };
});

// 크기 순으로 정렬 (크기 → 인덱스 순)
balls.sort((a, b) => (a.size === b.size ? a.index - b.index : a.size - b.size));

// 결과 저장 배열
const result = new Array(N).fill(0);

// 누적합
let totalSize = 0; // 현재까지의 총 크기
const colorSize = {}; // 색상별 크기 합
let prevSize = 0; // 이전 공의 크기 (중복 크기 처리)

// 두 포인터 계산
for (let i = 0; i < N; i++) {
  const { color, size, index } = balls[i];

  // 새로운 크기의 공일 때
  if (size !== prevSize) {
    prevSize = size;
    totalSize += size;
  }

  // 현재 공보다 작은 공들의 총합에서 같은 색상의 누적 크기 제외
  const colorSum = colorSize[color] || 0;
  result[index] = totalSize - colorSum;

  // 현재 공의 크기 누적
  colorSize[color] = (colorSize[color] || 0) + size;
}

console.log(result.join("\n"));

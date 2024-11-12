const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const INF = Number.MAX_SAFE_INTEGER;

const N = parseInt(input[0]);
const M = parseInt(input[1]);

// 거리 배열 초기화
const distance = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));

// 자기 자신으로 가는 거리는 0으로 설정
for (let i = 1; i <= N; i++) {
  distance[i][i] = 0;
}

// 간선 정보
for (let i = 2; i < 2 + M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  distance[a][b] = Math.min(distance[a][b], c);
}

// 거쳐가는 노드
for (let k = 1; k <= N; k++) {
  // 시작 노드
  for (let j = 1; j <= N; j++) {
    // 도착 노드
    for (let i = 1; i <= N; i++) {
      if (distance[j][i] > distance[j][k] + distance[k][i]) {
        distance[j][i] = distance[j][k] + distance[k][i];
      }
    }
  }
}

let result = "";
for (let j = 1; j <= N; j++) {
  for (let i = 1; i <= N; i++) {
    result += (distance[j][i] === INF ? 0 : distance[j][i]) + " ";
  }
  result += "\n";
}

console.log(result.trim());

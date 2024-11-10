const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const INF = Number.MAX_SAFE_INTEGER;

const distance = Array.from({ length: N }, () => Array(N).fill(INF));

// 친구 관계 입력
for (let i = 0; i < N; i++) {
  const line = input[i + 1].split("");
  for (let j = 0; j < N; j++) {
    if (i === j) distance[i][j] = 0; // 자기 자신은 거리를 0으로 설정
    else if (line[j] === "Y") distance[i][j] = 1; // 친구 관계인 경우 거리를 1로 설정
  }
}

// 경유 노드
for (let k = 0; k < N; k++) {
  // 시작 노드
  for (let i = 0; i < N; i++) {
    // 도착 노드
    for (let j = 0; j < N; j++) {
      if (distance[i][j] > distance[i][k] + distance[k][j]) {
        distance[i][j] = distance[i][k] + distance[k][j];
      }
    }
  }
}

// 2-친구의 최대 수 찾기
let maxFriends = 0;

for (let i = 0; i < N; i++) {
  let friendCount = 0;
  for (let j = 0; j < N; j++) {
    // 자기 자신을 제외하고, 2 이하의 거리에 있는 사람
    if (i !== j && distance[i][j] <= 2) {
      friendCount++;
    }
  }
  maxFriends = Math.max(maxFriends, friendCount);
}

console.log(maxFriends);

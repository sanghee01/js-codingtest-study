const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

let testCases = Number(input[0]); // 테스트 케이스 수
let line = 1;

while (testCases--) {
  const [M, N, K] = input[line].split(" ").map(Number); // M: 가로, N: 세로, K: 배추 개수
  let graph = Array.from({ length: N }, () => Array(M).fill(0)); // 그래프 초기화

  // 배추 위치 입력
  for (let i = 1; i <= K; i++) {
    const [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1; // 배추가 심긴 위치를 1로 표시
  }

  let answer = 0; // 군집 수를 카운트할 변수

  // 모든 좌표를 탐색
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        // 배추가 심어져 있는 곳에서 DFS 시작
        dfs(graph, N, M, i, j);
        answer++; // 새로운 군집을 발견하면 군집 수 증가
      }
    }
  }

  console.log(answer);
  line += K + 1; // 다음 테스트 케이스로 이동
}

// DFS 함수
function dfs(graph, N, M, x, y) {
  // 범위를 벗어나면 종료
  if (x < 0 || x >= N || y < 0 || y >= M) return;

  // 현재 위치에 배추가 없다면 종료
  if (graph[x][y] !== 1) return;

  // 배추가 있다면 방문 처리
  graph[x][y] = -1;

  // 상하좌우 인접한 곳을 탐색
  dfs(graph, N, M, x - 1, y); // 상
  dfs(graph, N, M, x + 1, y); // 하
  dfs(graph, N, M, x, y - 1); // 좌
  dfs(graph, N, M, x, y + 1); // 우
}

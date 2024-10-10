// 4803 백준 골드4
// 그래프 내 사이클 판별
// 혼자 풀기 실패

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// dfs 깊이 우선 탐색, 완탐, 현재 노드 방문 처리, 연결된 노드 재귀적으로 방문

// 사이클이 존재한다면 true를 반환, true일 경우 트리가 아님.
// 인접 노드가 이미 방문한 노드라면 사이클 (무방향그래프이므로 직전노드 제외)
const dfs = (visited, x, prev) => {
  visited[x] = 1;

  for (i of graph[x]) {
    if (!visited[i]) {
      if (dfs(visited, i, x)) return true; // 다음 노드가 사이클이면 사이클 리턴.
    } else if (i != prev) return true;
  }
  return false;
};

let line = 0;
let case_count = 0;
let graph = [];
let visited = [];

const print = (num) => {
  if (num === 0) return "No trees.";
  if (num === 1) return "There is one tree.";
  return `A forest of ${num} trees.`;
};

for (let i = 0; i < input.length; i++) {
  // 다음 tc 순서가 되었을 때,
  // 전 tc의 저장된 인접리스트에 대한 dfs 실행 후
  // 다음 tc 인접리스트 저장 준비.

  if (i === line) {
    // 노드를 전부 방문할 때까지 dfs 돌리기
    // dfs 리턴값이 false인 만큼 트리 개수.
    let count = 0;

    for (let j = 1; j < visited.length; j++) {
      if (visited[j]) continue;
      if (!dfs(visited, j)) count += 1;
    }
    if (i !== 0) {
      console.log(`Case ${case_count}: ${print(count)}`);
    }

    // 다음 tc를 위한 초기화
    case_count += 1;
    line += input[i][1] + 1;
    graph = Array.from({ length: input[i][0] + 1 }, () => []);
    visited = Array.from({ length: input[i][0] + 1 }, () => 0);
    continue;
  }

  // 연결된 노드들을 양방향 인접리스트로 저장.
  const [x, y] = input[i];
  graph[x].push(y);
  graph[y].push(x);
}

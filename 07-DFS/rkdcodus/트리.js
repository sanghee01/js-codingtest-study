// 4803 백준 골드4
// 그래프 내 사이클 판별
// 혼자 풀기 실패

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

/*
dfs = 깊이 우선 탐색
완전탐색
현재 노드 방문 처리
연결된 노드 재귀적으로 방문 

1. 테스트케이스마다 인접리스트 만들기
2. 트리의 개수 구하기

트리: 사이클이 없는 연결 요소 
dfs를 이용하여 트리의 개수를 계산한다.
*/

let line = 0; // test case를 구별하기 위한 변수
let case_count = 0; // 몇 번째 case인지
let graph = [];
let visited = [];

// 사이클이 존재한다면 true를 반환, true일 경우 트리가 아님.
// 인접 노드가 이미 방문한 노드라면 사이클 (무방향그래프이므로 직전노드 제외)
const dfs = (visited, x, prev) => {
  visited[x] = 1;

  for (let i of graph[x]) {
    if (!visited[i]) {
      if (dfs(visited, i, x)) return true; // 다음 노드가 사이클이면 사이클 리턴.
    } else if (i != prev) return true;
  }
  return false;
};

const print = (num) => {
  if (num === 0) return "No trees.";
  if (num === 1) return "There is one tree.";
  return `A forest of ${num} trees.`;
};

for (let i = 0; i < input.length; i++) {
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

/* 
다음 tc 순서가 되었을 때,
전 tc의 저장된 인접리스트에 대한 dfs 실행 후
다음 tc 인접리스트 저장 준비.

6 3 <- line 0
1 2
2 3
3 4
6 5 <- line 4
1 2
2 3
3 4
4 5
5 6
6 6 <- line 10
1 2
2 3
1 3
4 5
5 6
6 4
0 0 <- line 17
*/

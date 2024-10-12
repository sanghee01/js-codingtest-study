// 14502 백준
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 백트래킹으로 세울 수 있는 벽의 조합 구하기.
// 2. 벽 설치
// 3. dfs로 바이러스 퍼트리기
// 4. 안전영역 구하기

const [n, m] = input[0];
const graph = input.slice(1);
let answer = 0;

const empty = [];
const visited = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) {
      empty.push([i, j]);
      visited.push(false);
    }
  }
}

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

const dfs = (map, x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (map[nx][ny] === 0) {
      map[nx][ny] = 2;
      dfs(map, nx, ny);
    }
  }
};

const wallCase = [];

const backTracking = (v) => {
  if (wallCase.length === 3) {
    // case별 graph 만들기
    const temp_graph = [];

    for (let line of graph) {
      temp_graph.push([...line]);
    }

    // 벽 설치
    for (let i of wallCase) {
      temp_graph[i[0]][i[1]] = 1;
    }

    // 바이러스 퍼트리기
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp_graph[i][j] === 2) dfs(temp_graph, i, j);
      }
    }

    // 안전영역 계산
    let safe = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp_graph[i][j] === 0) {
          safe += 1;
        }
      }
    }

    // 안전영역 최댓값 구하기
    answer = Math.max(answer, safe);
    return;
  }

  for (let i = v; i < empty.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    wallCase.push(empty[i]);
    backTracking(i);
    visited[i] = false;
    wallCase.pop();
  }
};

backTracking(0);
console.log(answer);

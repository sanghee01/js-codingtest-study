// 1012 백준 실2
// 좌표 주어짐.
// 좌표가 서로 이어져 있는지 확인.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const tc = input[0][0];

const dfs = (graph, n, m, x, y) => {
  if (x < 0 || y < 0 || x >= n || y >= m) {
    return false; // 영역을 벗어나면 바로 리턴
  }
  if (graph[x][y] == 1) {
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y + 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y - 1);
    return true;
  }
  return false;
};

let line = 1;

for (let i = 0; i < tc; i++) {
  let [m, n, k] = input[line];
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }

  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i];
    graph[x][y] = 1;
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer += 1;
    }
  }
  line += k + 1;
  console.log(answer);
}

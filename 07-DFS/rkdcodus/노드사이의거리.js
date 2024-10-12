// 1240 백준 골드5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// dfs
// 깊이 우선 탐색
// 현재 노드 방문 처리
// 노드와 연결된 다른 노드 재귀적으로 방문

const n = input[0][0]; // 노드의 개수
const m = input[0][1]; // 알고싶은 노드의 쌍
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  const [x, y, num] = input[i];
  graph[x].push([y, num]);
  graph[y].push([x, num]);
}

const dfs = (visited, x, y, cur, length) => {
  if (cur === y) {
    console.log(length);
    return;
  }

  visited[cur] = 1;

  for (i of graph[cur]) {
    if (!visited[i[0]]) {
      dfs(visited, x, y, i[0], length + i[1]);
    }
  }
};

for (let i = n; i < n + m; i++) {
  const visited = Array.from({ length: n + 1 }, () => 0);
  const [x, y] = input[i];
  dfs(visited, x, y, x, 0);
}

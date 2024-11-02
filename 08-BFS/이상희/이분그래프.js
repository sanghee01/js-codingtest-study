let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .split("\n");

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  let [v, e] = input[line++].split(" ").map(Number);

  // 그래프 정보 입력받기
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [u, w] = input[line++].split(" ").map(Number);
    graph[u].push(w);
    graph[w].push(u);
  }

  let visited = new Array(v + 1).fill(-1);

  function bfs(start) {
    let queue = [start];
    visited[start] = 0; // 처음 노드는 빨간색으로 칠하기

    while (queue.length != 0) {
      let x = queue.shift();
      for (let y of graph[x]) {
        if (visited[y] == -1) {
          visited[y] = (visited[x] + 1) % 2; // 빨강과 파랑 전환
          queue.push(y);
        } else if (visited[x] == visited[y]) return false;
      }
    }
    return true;
  }

  function isBipartite() {
    for (let x = 1; x <= v; x++) {
      if (visited[x] == -1) {
        if (!bfs(x)) return false;
      }
    }
    return true;
  }

  if (isBipartite()) console.log("YES");
  else console.log("NO");
}

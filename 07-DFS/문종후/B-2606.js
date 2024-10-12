// 바이러스 문제
let fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");
let n = Number(input[0]);
let m = Number(input[1]);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);
function dfs(x) {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(cnt - 1);

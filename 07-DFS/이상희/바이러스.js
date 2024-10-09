const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 노드 수
const K = Number(input[1]); // 간선 수

const visited = new Array(N + 1).fill(false); // 방문 배열
const graph = Array.from({ length: N + 1 }, (v, i) => []);
let answer = 0;

for (let i = 2; i < K + 2; i++) {
  let [key, value] = input[i].split(" ").map(Number);
  graph[key].push(value);
  graph[value].push(key); // 양방향 연결
}

function dfs(v) {
  visited[v] = true;
  answer++;
  for (let i of graph[v]) {
    if (!visited[i]) dfs(i);
  }
}

dfs(1);

console.log(answer - 1); // 1번 노드 제외

// 2606 백준 실버3
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0]; // 컴퓨터 수
const m = input[1][0]; // 컴퓨터 쌍 수
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
  let [x, y] = input[i];
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(n + 1).fill(false);
let count = 0;
const dfs = (v) => {
  visited[v] = true;
  count += 1;

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
};

dfs(1);
console.log(count - 1);

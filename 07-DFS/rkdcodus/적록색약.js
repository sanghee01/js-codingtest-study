// 10026 백준 골드5

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const graph = [];
const special_graph = [];

for (let i = 1; i < input.length; i++) {
  const line = input[i].replace("\r", "").split("");
  const special_line = input[i].replace("\r", "").replaceAll("G", "R").split("");
  graph.push(line);
  special_graph.push(special_line);
}

const dfs = (map, x, y, color) => {
  if (x < 0 || y < 0 || x >= n || y >= n || map[x][y] === "V") return false;
  if (map[x][y] === color) {
    map[x][y] = "V";

    dfs(map, x, y - 1, color);
    dfs(map, x - 1, y, color);
    dfs(map, x, y + 1, color);
    dfs(map, x + 1, y, color);
    return true;
  }
  return false;
};

const answer = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const color = graph[i][j];
    const special_color = special_graph[i][j];

    if (dfs(graph, i, j, color)) answer[0] += 1;
    if (dfs(special_graph, i, j, special_color)) answer[1] += 1;
  }
}

console.log(answer.join(" "));

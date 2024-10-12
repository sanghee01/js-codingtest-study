let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let map = input.map((x) => x.split(""));
let visited = Array.from({ length: N }, () => new Array(N).fill(false));
let result = "";

let count = 0;
const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function dfs(y, x, color) {
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny >= 0 && ny < N && nx >= 0 && nx < N) {
      if (map[ny][nx] == color && visited[ny][nx] == false) {
        visited[ny][nx] = true;
        dfs(ny, nx, color);
      }
    }
  }
}

// 1. 적록색맹이 아닌 경우
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (visited[y][x] == false) {
      visited[y][x] = true;
      dfs(y, x, map[y][x]);
      count++;
    }
  }
}

result += count + " ";

// 2. 적록색맹인 경우
// 값들 다시 초기화
count = 0;
map = map.map((row) => row.map((element) => (element === "R" ? "G" : element))); // R인경우 G로 바꿈
visited = Array.from({ length: N }, () => new Array(N).fill(false));

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (visited[y][x] == false) {
      visited[y][x] = true;
      dfs(y, x, map[y][x]);
      count++;
    }
  }
}

result += count;

console.log(result);

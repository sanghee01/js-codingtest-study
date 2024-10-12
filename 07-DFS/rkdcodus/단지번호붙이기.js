// 2667 백준 실버1
// result 계산이 이해가 잘 안됐음.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]); // 지도의 크기
const a_map = input.slice(1).map((row) => row.split(""));

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0]; // 오른쪽 이동을 위해 1로 변경
const answer = [];

const dfs = (x, y) => {
  if (x < 0 || y < 0 || x >= n || y >= n || a_map[x][y] === "0") return 0;
  a_map[x][y] = "0"; // 방문 처리 (지도 값 0으로 변경)
  let result = 1;
  for (let dir = 0; dir < 4; dir++) {
    result += dfs(x + dx[dir], y + dy[dir]);
  }
  return result;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let cur = dfs(i, j);
    if (cur > 0) answer.push(cur);
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));

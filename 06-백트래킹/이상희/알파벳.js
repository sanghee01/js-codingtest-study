let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= R; i++) board.push(input[i]);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = new Set();
let maxDepth = 0;

function recur(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth); // 최대 깊이 계산
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue; // 맵을 벗어난다면 무시
    if (visited.has(board[nx][ny])) continue; // 중복된다면 무시
    visited.add(board[nx][ny]); // 방문처리
    recur(depth + 1, nx, ny);
    visited.delete(board[nx][ny]);
  }
}

visited.add(board[0][0]); // 왼쪽 위에서 출발
recur(1, 0, 0);
console.log(maxDepth);

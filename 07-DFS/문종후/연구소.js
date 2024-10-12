const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [ROW, COLUMN] = input[0].split(" ").map((a) => Number(a));

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

// DFS 함수 정의
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
function dfs(row, col) {
  board[row][col] = 2;
  for (let i = 0; i < 4; i++) {
    const nrow = row + dx[i];
    const ncol = col + dy[i];
    if (
      0 <= ncol &&
      ncol < COLUMN &&
      0 <= nrow &&
      nrow < ROW &&
      board[nrow][ncol] === 0
    ) {
      dfs(nrow, ncol);
    }
  }
}

let boards = new Array(ROW);
const empty_board = [];

for (let i = 0; i < ROW; i++) {
  boards[i] = input[i + 1].split(" ").map((a) => Number(a));
  for (let j = 0; j < COLUMN; j++) {
    if (boards[i][j] === 0) {
      empty_board.push([i, j]);
    }
  }
}
// 3군데 벽세울 수 있는 리스트
const candidates = combination(empty_board, 3);
let answer = Number.NEGATIVE_INFINITY;

for (const candidate of candidates) {
  let cash = 0;
  board = [];
  for (let r = 0; r < ROW; r++) {
    board[r] = [...boards[r]];
  }

  for (const candi of candidate) {
    board[candi[0]][candi[1]] = 1;
  }

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COLUMN; col++) {
      if (board[row][col] === 2) dfs(row, col);
    }
  }
  for (let row = 0; row < ROW; row++) {
    cash += board[row].filter((a) => a === 0).length;
  }
  if (cash > answer) {
    answer = cash;
  }
}

console.log(answer);

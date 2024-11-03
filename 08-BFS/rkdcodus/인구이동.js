// 16234 백준
// 혼자풀기 실패
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 상하좌우 연합인 나라 찾기
// 2. 이동인구수 계산 후 업데이트

const [n, l, r] = input[0];
const graph = input.slice(1);
const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let answer = 0;

// 국경 열어야할 나라 찾기
const bfs = (x, y, index, union) => {
  const queue = [[x, y]];
  const united = [[x, y]];
  let sum = graph[x][y];
  let count = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    union[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (union[nx][ny] === -1) {
        const diff = Math.abs(graph[x][y] - graph[nx][ny]);
        if (diff >= l && diff <= r) {
          union[nx][ny] = index;
          sum += graph[nx][ny];
          count += 1;
          united.push([nx, ny]);
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let unit of united) {
    const [i, j] = unit;
    graph[i][j] = Math.floor(sum / count);
  }
};

while (true) {
  // 더 이상 인구 이동을 할 수 없을 때까지 반복
  let union = Array.from(Array(n), () => Array(n).fill(-1));
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        // 해당 나라가 아직 처리되지 않았다면
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == n * n) break; // 모든 인구 이동이 끝난 경우
  answer += 1;
}

console.log(answer);

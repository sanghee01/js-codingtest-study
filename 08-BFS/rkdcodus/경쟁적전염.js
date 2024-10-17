// 18405 백준 골5 35분
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. graph에서 방문처리
// 2. 번호가 낮은 순부터 바이러스 증식. => 번호가 낮은 순부터 큐에 저장.
// 3. 처음의 바이러스(번호순으로) 큐에 저장하고 bfs 시작
// 4. 퍼진 바이러스는 graph에 번호를 기록.
// 5. 이미 퍼져있다면 무시.
// 6. s초가 지나면 return.

const [n, k] = input[0];
const [s, x, y] = input.at(-1);
const graph = input.slice(1, n + 1);
const queue = [];
const virus = Array.from({ length: k + 1 }, () => []);

// 번호 순으로 queue에 넣기 => [바이러스 번호, 시간]
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 0) continue;
    virus[graph[i][j]].push([i, j, 0]);
  }
}

for (let i = 1; i <= k; i++) {
  for (let lo of virus[i]) {
    queue.push(lo);
  }
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = () => {
  while (queue.length) {
    const [x, y, time] = queue.shift();

    if (time === s) return;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y];
        queue.push([nx, ny, time + 1]);
      }
    }
  }
};

bfs();
console.log(graph[x - 1][y - 1]);

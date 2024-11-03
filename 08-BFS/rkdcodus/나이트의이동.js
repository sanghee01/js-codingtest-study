// 백준 7562 실1
// 가중치가 없는 그래프에서의 최단 경로 구하기 => bfs ( 가중치가 있으면 다익스트라 (우선순위큐 이용))
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const tc = input[0][0];
let line = 1;
// 1. 체스판 배열 만들기 : 각 위치에 도달하는데 필요한 이동 수 기록을 위함.
// 2. 이동할 수 있는 방법 배열
const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
// 3. bfs를 이용하여 체스판 배열에 기록 시작.
// 4. 이동하고자하는 장소에 도달하면 return.

const bfs = (chess, start, end, l) => {
  const queue = [start];

  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === end[0] && y === end[1]) {
      return chess[x][y];
    }

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 체스판을 벗어나면 무시.
      if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
      // 아직 한번도 방문하지 않은 위치라면 계속.
      if (chess[nx][ny] === 0) {
        chess[nx][ny] = chess[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < tc; i++) {
  const [l, start, end] = input.slice(line, line + 3);
  const chess = Array.from({ length: l[0] }, () => Array.from({ length: l[0] }, () => 0));
  console.log(bfs(chess, start, end, l[0]));
  line += 3;
}

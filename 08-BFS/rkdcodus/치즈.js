// 2638 백준 실패
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

/* 
0. 외부 내부 구분하기  
    => 외부를 구분하기. 
    (0,0)에서 시작하여 치즈에 닿으면 -1로 표기
1. 녹을 치즈 구하기  
    => 치즈 격자 주변 중 2변 이상이 외부 공기일 경우
2. 치즈 녹이기 
3. 치즈가 모두 녹을 때까지 0,1,2번을 반복.

실패
const [n, m] = input[0];
const graph = input.slice(1);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 외부 구분 함수.
function markOutsideAirBFS(x, y) {
  let markQ = [[x, y]];
  while (markQ.length) {
    const [x, y] = markQ.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (graph[nx][ny] === 1 || graph[nx][ny] === 2) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = -1;
        markQ.push([nx, ny]);
      }
    }
  }
}

markOutsideAirBFS(0, 0);

// 녹을 치즈인지 확인하는 함수.
const checkMelting = (x, y) => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (graph[nx][ny] === -1) count += 1;
  }
  return count >= 2;
};

const queue = [];
let answer = 0;

// 초기 녹을 치즈 구하기.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && checkMelting(i, j)) {
      queue.push([i, j, 1]);
      graph[i][j] = 2;
    }
  }
}

// 치즈 녹이기.
const bfs = () => {
  while (queue.length) {
    const [x, y, time] = queue.shift();
    graph[x][y] = -1;
    answer = time;

    // 외부 확인.
    markOutsideAirBFS(x, y);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (graph[nx][ny] === 1 && checkMelting(nx, ny)) {
        graph[nx][ny] = 2;
        queue.push([nx, ny, time + 1]);
      }
    }
  }
};

bfs();

console.log(answer);

*/

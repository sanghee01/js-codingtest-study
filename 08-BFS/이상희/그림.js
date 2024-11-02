let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
input.shift();

let map = input.map((x) => x.split(" ").map(Number)); // 숫자로 변환
let visited = Array.from({ length: N }, () => new Array(M).fill(false)); // 크기 N x M

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function bfs(y, x) {
  let area = 1;
  const queue = [[y, x]];
  visited[y][x] = true; // 시작점 방문 처리

  while (queue.length > 0) {
    // 큐가 비어있지 않을 때 반복
    let [ey, ex] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = ey + dy[i];
      let nx = ex + dx[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        // 경계 체크
        if (map[ny][nx] === 1 && !visited[ny][nx]) {
          // 그림(1)이고 아직 방문 안 했으면
          area++;
          visited[ny][nx] = true; // 방문 처리
          queue.push([ny, nx]);
        }
      }
    }
  }

  return area; // 그림 크기 반환
}

let count = 0;
let maxCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      // 그림(1)이고 아직 방문 안 한 곳 탐색
      count++;
      maxCount = Math.max(maxCount, bfs(i, j)); // 최대 그림 크기 갱신
    }
  }
}

console.log(count); // 그림의 개수
console.log(maxCount); // 가장 큰 그림의 크기

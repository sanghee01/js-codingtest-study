let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

// 이동 방향
const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  let l = Number(input[line]);
  let [x, y] = input[line + 1].split(" ").map(Number); // 현재 위치
  let [targetX, targetY] = input[line + 2].split(" ").map(Number); // 목표 위치
  let visited = [];

  for (let i = 0; i < l; i++) visited.push(new Array(l).fill(0));
  queue = [];
  queue.push([x, y]);
  visited[x][y] = 1;
  while (queue.length > 0) {
    let cur = queue.shift();
    x = cur[0];
    y = cur[1];

    // 현재 위치에서 이동하고자 하는 위치 확인
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      // 방문하지 않은 위치인 경우
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  line += 3; // 다음 테스트 케이스로 이동
  console.log(visited[targetX][targetY] - 1); // 항상 도달 가능
}

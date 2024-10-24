const [n, k] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MAX = 100001;
const visited = new Array(MAX).fill(0); // 각 위치까지의 최단 시간

function bfs() {
  const queue = [n];

  while (queue.length > 0) {
    let cur = queue.shift(); // 현재 위치를 큐에서 꺼냄

    if (cur === k) return visited[cur]; // 목표 위치에 도달하면 걸린 시간을 반환

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next < MAX && visited[next] == 0) {
        visited[next] = visited[cur] + 1;
        queue.push(next); // 새로운 위치 정보를 큐에 저장
      }
    }
  }
}

console.log(bfs());

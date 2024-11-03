// 1697 백준 실버 1
// bfs, 그래프 순회, 최단거리.
// 혼자 풀기 실패

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
const visited = new Array(100001).fill(0); // 각 위치까지의 최단 시간.

const bfs = () => {
  const queue = [n];

  while (queue.length) {
    const num = queue.shift();

    if (num === k) {
      return visited[num];
    }

    for (let next of [num - 1, num + 1, num * 2]) {
      if (next < 0 || next > 100001) continue; //공간을 벗어나면 무시.
      // 아직 방문하지 않은 위치라면
      if (visited[next] === 0) {
        visited[next] = visited[num] + 1;
        queue.push(next);
      }
    }
  }
};

console.log(bfs());

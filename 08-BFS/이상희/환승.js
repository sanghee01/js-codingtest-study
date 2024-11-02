let [n, k, m, ...data] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const MAX = n + m;
const graph = Array.from({ length: MAX + 1 }, () => []);

// 역과 하이퍼 튜브 간의 연결
for (let i = 0; i < m; i++) {
  let hyperTubeIdx = n + i + 1; // 하이퍼 튜브는 n+1부터 m까지
  for (let j = 0; j < k; j++) {
    let station = data[i * k + j]; // 각 하이퍼 튜브에 연결된 역
    graph[station].push(hyperTubeIdx); // 역에서 하이퍼 튜브로
    graph[hyperTubeIdx].push(station); // 하이퍼 튜브에서 역으로
  }
}

function bfs() {
  const queue = [[1, 1]]; // [현재 위치, 이동 횟수] - 1번 역에서 시작, 이동 횟수는 1
  const visitedStation = Array(n + 1).fill(false); // 역 방문 여부
  const visitedTube = Array(m + 1).fill(false); // 하이퍼 튜브 방문 여부
  visitedStation[1] = true;

  while (queue.length > 0) {
    let [cur, count] = queue.shift();

    // N번 역에 도달하면 이동 횟수를 반환
    if (cur === n) return count;

    for (let next of graph[cur]) {
      if (next > n) {
        // 하이퍼 튜브는 n+1부터 시작하므로, 하이퍼 튜브 노드에 대한 처리
        let tubeIdx = next - n; // 하이퍼 튜브 인덱스 계산
        if (!visitedTube[tubeIdx]) {
          visitedTube[tubeIdx] = true; // 하이퍼 튜브 방문 처리
          for (let station of graph[next]) {
            if (!visitedStation[station]) {
              visitedStation[station] = true; // 역 방문 처리
              queue.push([station, count + 1]); // 역에 대한 처리
            }
          }
        }
      } else {
        if (!visitedStation[next]) {
          visitedStation[next] = true; // 역 방문 처리
          queue.push([next, count + 1]); // 역에 대한 처리
        }
      }
    }
  }

  return -1; // N번 역에 도달할 수 없는 경우
}

console.log(bfs());

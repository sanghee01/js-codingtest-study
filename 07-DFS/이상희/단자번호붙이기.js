/**
 * 1. 아이디어
 * - 2중 for, 값 1 && 방문 x => DFS
 * - DFS를 통해 찾은 값을 저장 후 정렬해서 출력
 *
 * 2. 시간복잡도
 * - DFS : O(V+E)
 * - V, E : N&2, 4N^2
 * - V+E : 5N^2 ~= N^2 ~= 625 >> 가능
 *
 * 3. 자료구조
 * - 그래프 저장 : int[][]
 * - 방문여부 : bool[][]
 * - 결과값 : int[]
 */

let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((x) => x.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const result = [];

let area = 0;
// 상하좌우
const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function dfs(y, x) {
  area++; // 영역 추가

  // 각 노드에서 상하좌우 4칸 탐색
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i]; // 현재 y 인덱스
    const nx = x + dx[i]; // 현재 x 인덱스

    // 방향 체크시 map의 영역에서 초과되지 않으면 실행
    if (ny >= 0 && ny < N && nx >= 0 && nx < N) {
      // 1이고 방문한 적 없으면 실행
      if (map[ny][nx] == 1 && visited[ny][nx] == false) {
        visited[ny][nx] = true;
        dfs(ny, nx); // 그 다음 재귀 탐색
      }
    }
  }
}

// map 하나씩 탐색 시작
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] == 1 && visited[y][x] == false) {
      visited[y][x] = true;
      area = 0; // 영역 초기화
      dfs(y, x); // 탐색을 위한 재귀 호출
      result.push(area); // 탐색이 끝
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);

for (let x of result) {
  console.log(x);
}

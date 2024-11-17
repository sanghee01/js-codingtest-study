// 강의 풀이

const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = []; // 마을 정보
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}
let height = []; // 고도 정보
for (let i = n + 1; i <= n + n; i++) {
  height.push(input[i].split(" ").map(Number));
}

// 이동 가능한 인접한 8가지 칸
let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function dfs(x, y) {
  visited[x][y] = true; // 방문 처리
  if (arr[x][y] == "K") cnt += 1; // 집(K)인 경우 카운트
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 맵을 벗어나는 경우 무시
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    // 아직 방문한 적 없는 경우
    if (!visited[nx][ny]) {
      // 현재 범위 [left, right] 안에 해당하는 고도인 경우
      if (
        height[nx][ny] >= uniqueHeight[left] &&
        height[nx][ny] <= uniqueHeight[right]
      ) {
        dfs(nx, ny);
      }
    }
  }
}

let uniqueHeight = new Set();
let target = 0;
let result = 1e9;
let startX, startY;

// 마을 정보와 고도 정보를 바탕으로 설정
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    uniqueHeight.add(height[i][j]);
    // 출발 지점(P)
    if (arr[i][j] == "P") {
      startX = i;
      startY = j;
    }
    if (arr[i][j] == "K") target += 1; // 전체 집(K)의 개수
  }
}

uniqueHeight = [...uniqueHeight]; // 고유한 고도 값 정렬
uniqueHeight.sort((a, b) => a - b);

let left = 0;
let right = 0;
let middle = 0;

// 출발 지점의 높이를 초기 right으로 설정
for (let i = 0; i < uniqueHeight.length; i++) {
  if (uniqueHeight[i] == height[startX][startY]) {
    right = i;
    middle = i;
    break;
  }
}

while (true) {
  // 방문 가능한 집의 수(cnt)가 target보다 작다면, right을 증가
  while (true) {
    visited = [];
    for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
    cnt = 0;
    dfs(startX, startY); // DFS로 방문 가능한 집 카운트
    if (right < uniqueHeight.length - 1 && cnt < target) right += 1;
    else break;
  }

  // 모든 집을 방문 가능한 경우
  if (cnt == target) {
    // 가장 높은 고도와 낮은 고도 사이의 차이 (최솟값) 기록
    result = Math.min(result, uniqueHeight[right] - uniqueHeight[left]);
  }

  left += 1; // 유효 범위를 조건에 맞춰 이동
  if (left > middle || right >= uniqueHeight.length) break;
}

console.log(result);

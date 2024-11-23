//집배원 한상덕
// 유형: 투포인터

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");
const n = +input[0];
const arr = []; //마을정보
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}

const height = []; //고도정보
for (let i = n + 1; i <= n + n; i++) {
  height.push(input[i].split(" ").map(Number));
}

let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function dfs(x, y) {
  visited[x][y] = true;
  if (arr[x][y] === "K") cnt += 1;
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny > n) continue;
    if (!visited[nx][ny]) {
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
//고도에대한 길이정리
let target = 0;
//방문해야하는 우체국의 개수
let result = 1e9;
let startX;
let startY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    uniqueHeight.add(height[i][j]);

    if (arr[i][j] === "P") {
      startX = i;
      startY = j;
    }
    //우체국 시작점 설정
    if (arr[i][j] === "K") target += 1;
  }
}

uniqueHeight = [...uniqueHeight].sort((a, b) => a - b);
//고도정렬
let left = 0;
let right = 0;
let middle = 0;
let cnt = 0;
for (let i = 0; i < uniqueHeight.length; i++) {
  if (uniqueHeight[i] === height[startX][startY]) {
    right = i;
    middle = i;
    break;
  }
}
//출발점의 고도가 uniqueHeight 배열에서 몇번쨰 있는지를 알아내고 이를 초기 right 값으로 설정해줍니다.

let visited = [];
while (true) {
  while (true) {
    visited = [];
    cnt = 0;
    for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));

    dfs(startX, startY);
    if (right < uniqueHeight.length - 1 && cnt < target) right += 1;
    else break;
  }
  if (cnt === target) {
    result = Math.min(result, uniqueHeight[right] - uniqueHeight[left]);
  }
  left += 1;
  if (left > middle) break;
}

console.log(result);

// 전체 탐색 흐름 요약
// 범위 확장 (right):
// 현재 범위에서 모든 우체통을 방문하지 못하면 right를 증가시켜 고도 범위를 확장.
// 범위 축소 (left):
// right 범위 내에서 모든 우체통을 방문할 수 있다면, left를 증가시켜 최소값을 줄이고 최소 피로도를 계산.
// 탐색 종료:
// left가 출발점의 고도를 넘어가면 탐색 종료.

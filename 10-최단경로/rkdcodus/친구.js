// 모든 지점에서 시작해 모든 지점의 최대 값을 구해야함. 가장 최대값을 출력.
// graph를 0으로 초기화.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split("\r"));

const n = input[0][0];
const graph = [];

for (let i = 1; i <= n; i++) {
  const arr = input[i][0].split("").map((p) => (p === "Y" ? 1 : Infinity));
  graph.push(arr);
}

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

for (let k = 0; k < n; k++) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      const cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(graph[a][b], cost);
    }
  }
}

let twoFriends = new Array(+n).fill(0);

// 거리가 1이란 소리는 친구, 거리가 2이면 친구의 친구란 소리.
// 그래서 2이하인 값이면 2-친구 값을 더하기 1
for (let a = 0; a < n; a++) {
  for (let b = 0; b < n; b++) {
    if (a != b && graph[a][b] <= 2) twoFriends[a] += 1;
  }
}

console.log(Math.max(...twoFriends));

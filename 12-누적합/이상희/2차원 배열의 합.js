const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number); // 배열 크기 (N X M)
let arr = [new Array(m + 1).fill(0)]; // 초기 배열
for (let i = 1; i <= n; i++) {
  arr.push([0, ...input[i].split(" ").map(Number)]);
}

let k = Number(input[n + 1]);
let queries = []; // 각 쿼리 정보 배열
for (let line = n + 2; line < n + 2 + k; line++) {
  let [i, j, x, y] = input[line].split(" ").map(Number);
  queries.push([i, j, x, y]);
}

// (1, 1)부터 누적 합(sum) 계산
let sum = [];
for (let i = 0; i <= n; i++) sum.push(new Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}

// (i, j)부터 (n, m)까지의 구간 합 계산
for (let index = 0; index < k; index++) {
  let [i, j, x, y] = queries[index];
  let current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
  console.log(current);
}

// 2167 실5 문제이해가 어려웠음. 설명이 잘 안되어있음
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input[0];
const data = input.slice(1, n + 1);
const k = input[n + 1][0];
const testcases = input.slice(n + 2);

const p = [0];

// p에 2차원 배열로 누적합 채우기
let sum = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    sum += data[i][j];
    p.push(sum);
  }
}

let answer = "";

for (let testcase of testcases) {
  const [i, j, x, y] = testcase;

  let result = 0;
  for (let k = i; k <= x; k++) {
    result += p[(k - 1) * m + y] - p[(k - 1) * m + j - 1];
  }
  answer += `${result}\n`;
}

console.log(answer.slice(0, -1));

// 백준 15649 실버3
// 중복없이 M개를 고른 수열
// 중복 없이 -> 방문 처리
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = input[0];
const m = input[1];

const visited = Array.from({ length: n + 1 }, () => false);
const result = [];

const solution = () => {
  if (result.length === m) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    solution();
    result.pop();
    visited[i] = false;
  }
};

solution();

// 백준 10819
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 백트래킹으로 중복하지 않은 조합 만들기
// 2. 최댓값 계산

const n = input[0][0];
const a = input[1];
const visited = new Array(n).fill(false);
const stack = [];
let answer = 0;

const dfs = () => {
  if (stack.length === n) {
    let result = 0;
    for (let i = 0; i < n - 1; i++) {
      result += Math.abs(stack[i] - stack[i + 1]);
    }
    answer = Math.max(answer, result);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    stack.push(a[i]);
    dfs();
    visited[i] = false;
    stack.pop();
  }
};

dfs();
console.log(answer);

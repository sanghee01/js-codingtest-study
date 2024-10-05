const { inherits } = require("util");

// 백준 2961 실버2
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0];
const ingredients = input.slice(1);
const visited = new Array(n).fill(false);
const used = [];
let answer = 10 ** 19;

// 전부 사용하지 않아도 됨.
// 중복 불가
// 순서 따져야함. 오름차순
const dfs = (depth) => {
  // 생성된 조합의 맛 계산
  if (depth !== 0) {
    let s = 1;
    let b = 0;
    for (let i of used) {
      s *= ingredients[i][0];
      b += ingredients[i][1];
    }
    const diff = Math.abs(s - b);
    answer = Math.min(answer, diff);
  }

  for (let i = depth; i < n; i++) {
    if (visited[i]) continue;
    if (used && used.at(-1) > i) continue;
    used.push(i);
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
    used.pop();
  }
};

dfs(0);
console.log(answer);

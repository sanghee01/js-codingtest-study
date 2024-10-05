// 백준 15651
// 중복 가능

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
let answer = "";

const solution = () => {
  if (result.length === m) {
    answer += result.join(" ");
    answer += "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    result.push(i);
    visited[i] = true;
    solution();
    result.pop();
    visited[i] = false;
  }
};

solution();
console.log(answer);

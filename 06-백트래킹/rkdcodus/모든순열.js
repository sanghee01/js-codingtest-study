// 백준 10974 실버 3
const n = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const visited = new Array(n).fill(false);
const result = [];

const solution = () => {
  if (result.length === n) {
    return console.log(result.join(" "));
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i + 1);
    solution();
    result.pop();
    visited[i] = false;
  }
};

solution();

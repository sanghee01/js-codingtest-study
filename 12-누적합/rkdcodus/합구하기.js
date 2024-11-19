// 11441 백준
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const data = input[1];
const m = input[2];
const sections = input.slice(3);

const p = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  p[i + 1] += p[i] + data[i];
}

sections.forEach((section) => {
  const [i, j] = section;
  console.log(p[j] - p[i - 1]);
});

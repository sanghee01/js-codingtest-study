// 백준 2751 실버5
// 백준 2750 브론즈2와 같음

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(
  input
    .slice(1)
    .sort((a, b) => a - b)
    .join("\n")
);

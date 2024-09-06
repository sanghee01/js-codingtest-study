// 백준 11650번 실버 5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = input.slice(1).sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

answer.forEach((i) => {
  console.log(i.join(" "));
});

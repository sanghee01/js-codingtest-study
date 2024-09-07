// 백준 10814 실버 5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const answer = input.slice(1).sort((a, b) => a[0] - b[0]);

answer.forEach((i) => console.log(i.join(" ")));

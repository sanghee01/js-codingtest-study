// 백준 1181 실버 5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 중복 제거
const strArr = [...new Set(input.slice(1))];
const answer = strArr.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  return a.length - b.length;
});

answer.forEach((i) => {
  console.log(i);
});

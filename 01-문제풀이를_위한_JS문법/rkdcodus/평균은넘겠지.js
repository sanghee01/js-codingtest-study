// 백준 4344 스페셜 지지
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = [];

input.slice(1).forEach((i) => {
  const num = i[0];
  const score = i.slice(1);
  const average = score.reduce((prev, cur) => prev + cur) / num;
  const good = score.filter((s) => s > average).length;

  answer.push(((good / num) * 100).toFixed(3) + "%");
});

answer.forEach((a) => console.log(a));

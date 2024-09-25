// 백준 1931 실버1

// 1. 시작 시간을 기준으로 오름차순 나열한다.
// 2. 각 회의가 시작일 경우의 최대 회의 수를 구함.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const sorted = input.slice(1).sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let end = 0;

for (let i = 0; i < input[0]; i++) {
  if (end <= sorted[i][0]) {
    end = sorted[i][1];
    answer += 1;
  }
}

console.log(answer);

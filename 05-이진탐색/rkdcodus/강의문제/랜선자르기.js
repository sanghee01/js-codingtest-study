// 백준 1654 실버2

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const k = input[0][0];
const n = input[0][1];
const lens = [];

for (let i = 1; i <= k; i++) {
  lens.push(input[i][0]);
}

lens.sort((a, b) => a - b);

// n을 만족하는지 확인하는 함수.
const nOrMore = (length) => {
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += parseInt(lens[i] / length);
  }
  return result >= n;
};

const solution = (start, end) => {
  if (start > end) return console.log(start - 1);
  const mid = parseInt((start + end) / 2);
  if (nOrMore(mid)) start = mid + 1;
  else end = mid - 1;
  solution(start, end);
};

solution(1, lens[k - 1]);

// 백준 2805번 실버2

// 정렬을 한다.
// 1 ~ 제일 큰 나무 범위에서 높이를 찾는다.
// 결정된 mid만큼 잘랐을 때, 가져갈 최소 나무의 길이 M보다 같거나 크다면 당첨.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const m = input[0][1];
const trees = input[1].sort((a, b) => a - b);

const canGoHome = (height) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += trees[i] >= height ? trees[i] - height : 0;
  }
  return result >= m;
};

const findHeight = (start, end) => {
  if (start > end) return console.log(start - 1);
  const mid = parseInt((start + end) / 2);

  if (canGoHome(mid)) start = mid + 1;
  else end = mid - 1;
  findHeight(start, end);
};

findHeight(1, trees[n - 1]);

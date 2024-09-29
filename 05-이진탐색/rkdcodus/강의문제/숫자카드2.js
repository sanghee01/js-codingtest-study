// 백준 10816 실버4
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// cards 오름차순 정렬.
// 찾는 숫자의 범위를 구한다.  (제일 왼쪽 인덱스, 오른쪽 인덱스 구하기)
// lowerBound(), upperBound() 구현하기.

const n = input[0][0];
const m = input[2][0];
const cards = input[1].sort((a, b) => a - b);
const nums = input[3];

const lowerBound = (num) => {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (num <= cards[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return start;
};

const upperBound = (num) => {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (num < cards[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return start;
};

const result = [];

for (let i = 0; i < m; i++) {
  result.push(upperBound(nums[i]) - lowerBound(nums[i]));
}

console.log(result.join(" "));

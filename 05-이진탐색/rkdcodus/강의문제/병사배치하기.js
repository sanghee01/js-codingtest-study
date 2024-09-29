// 백준 18353 실버 2
// 혼자 풀기 실패.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// LIS 최장증가 부분수열..

const n = input[0][0];
const level_arr = input[1].reverse();
// 순서 뒤집기.

let d = [0]; // LIS 배열

const lowerBound = (arr, start, end, num) => {
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (num <= arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return start;
};

for (x of level_arr) {
  // LIS 배열의 마지막 원소와 x를 비교.
  // x가 크다면 뒤에 넣기.
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    // x의 자리를 찾아 가장 왼쪽 자리로 교체.
    const index = lowerBound(d, 0, d.length, x);
    d[index] = x;
  }
}

console.log(n - (d.length - 1));

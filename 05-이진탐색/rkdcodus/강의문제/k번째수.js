// 백준 1300 골드1
// 혼자풀기 실패
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = input[0]; // 배열의 크기(N)
let k = input[1]; // 인덱스 K
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값
let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복적)
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) {
    // 각 행마다 계산
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result = mid; // result에 기록
    end = mid - 1;
  }
  // mid보다 작거나 같은 데이터의 개수가 k 미만이라면
  else start = mid + 1;
}
console.log(result);

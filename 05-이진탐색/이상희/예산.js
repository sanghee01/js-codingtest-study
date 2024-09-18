const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 지방 수
const M = Number(input[2]); // 총 예산
const arr = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산의 총액
  for (let x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= M) {
    // 조건 만족시 상한액 증가시키기(최대화가 목표)
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

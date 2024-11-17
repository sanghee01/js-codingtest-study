const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let maxLength = 0;
let intervalLength = 0;
let deleteCount = 0;
let start = 0;

for (let end = 0; end < N; end++) {
  if (numbers[end] % 2 === 0) {
    intervalLength++;
  } else {
    deleteCount++;
  }

  // deleteCount가 K를 초과하면, start를 이동시켜 구간을 축소
  while (deleteCount > K) {
    if (numbers[start] % 2 === 1) {
      deleteCount--;
    } else {
      intervalLength--;
    }
    start++; // 구간을 줄이기 위해 start 이동
  }

  // 현재 구간에서의 최대 짝수 길이 갱신
  maxLength = Math.max(maxLength, intervalLength);
}

console.log(maxLength);

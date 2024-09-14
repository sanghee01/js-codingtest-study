let [a, b] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;

while (b > a) {
  // b가 a보다 클 때만 변환을 시도
  if (b % 10 === 1) {
    // b의 마지막 자리가 1인 경우
    b = Math.floor(b / 10);
    count++;
  } else if (b % 2 === 0) {
    // b가 짝수인 경우
    b /= 2;
    count++;
  } else {
    break; // 위 두 경우가 아니라면 더 이상 변환 불가
  }
}

// 루프 종료 후 b가 a와 같으면 변환 성공, 그렇지 않으면 -1
if (b === a) {
  console.log(count + 1); // 마지막 연산 포함
} else {
  console.log(-1); // 변환이 불가능한 경우
}

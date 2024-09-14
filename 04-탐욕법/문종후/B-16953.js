const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);
let A = input[0];
let B = input[1];
let count = 0; // 연산 횟수 초기화

while (B > A) {
  // B가 A보다 작을 때까지 반복
  if (B % 2 === 0) {
    // B가 짝수일 때
    B = B / 2; // 2로 나누기
    count++; // 연산 횟수 증가
  } else if (B % 10 === 1) {
    // B의 일의 자리가 1일 때
    B = Math.floor(B / 10); // 일의 자리 제거
    count++; // 연산 횟수 증가
  } else {
    // 위 두 조건을 만족하지 않을 때
    console.log(-1); // 불가능한 경우이므로 -1 출력
    process.exit(); // 프로그램 종료
  }
}

if (B < A) {
  // B가 A보다 작은 경우 불가능한 경우이므로 -1 출력
  console.log(-1);
  process.exit();
}

count++; // A와 B가 같아졌을 때의 연산도 포함해야 함
console.log(count); // 최소 연산 횟수 출력

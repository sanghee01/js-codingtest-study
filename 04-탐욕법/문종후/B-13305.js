const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let N = BigInt(input[0]); // 입력 개수를 BigInt로 변환
let lengths = input[1].split(" ").map(BigInt); // 배열 요소를 BigInt로 변환
let oils = input[2].split(" ").map(BigInt); // 배열 요소를 BigInt로 변환
let sum = 0n; // 초기값을 BigInt로 설정

let priority = BigInt(Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER를 BigInt로 변환
for (let i = 0n; i < N - 1n; i++) {
  // BigInt로 반복문을 설정
  if (oils[i] < priority) {
    priority = oils[i];
  }
  sum += priority * lengths[i];
}
console.log(sum.toString()); // BigInt를 문자열로 변환하여 출력

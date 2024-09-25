// 백준 실버2
// 혼자 풀기 실패

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const A = input[0];
let B = input[1];
let answer = 0;
while (A < B) {
  // 값이 1로 끝나면 1을 붙인 것임.
  // 값이 1이 아니고 2로 나누어 떨어지면 2를 곱한 것임.
  // 마지막 값이 1이 아닌 홀수이고, A보다 작다면 -1
  if (B === A) break;
  if (B % 10 === 1) {
    B = +B.toString().slice(0, -1);
    answer += 1;
  } else if (B % 2 === 0) {
    B = B / 2;
    answer += 1;
  } else {
    console.log(-1);
    return;
  }
}

console.log(A === B ? answer + 1 : -1);

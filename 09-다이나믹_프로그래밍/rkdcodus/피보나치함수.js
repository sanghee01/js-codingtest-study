// 백준 1003 실버3

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 방법 1 시간초과 => 메모이제이션하지 않음 동적 프로그래밍이 아님
/*
const testCase = input[0];
let answer = [0, 0];

const fibonacci = (n) => {
  // 종료 조건
  if (n === 0) {
    answer[0] += 1;
    return 0;
  }

  if (n === 1) {
    answer[1] += 1;
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

for (let i = 1; i <= testCase; i++) {
  answer = [0, 0];
  fibonacci(input[i]);
  console.log(answer.join(" "));
}
*/

/*

방법2 상향식 dp => 가장 빠른 방법
const testCase = input[0];

const dp = Array.from({ length: 41 }, () => 0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= 40; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

for (let i = 1; i <= testCase; i++) {
  const n = input[i];
  if (n === 0) console.log(1, 0);
  else console.log(dp[n - 1], dp[n]);
}

*/

// 방법3 하향식 dp => 메모이제이션 함
const testCase = input[0];
const memo = [0, 1]; // 피보나치 수열의 초기 값으로 0과 1을 설정

const fibonacci = (n) => {
  if (memo[n] !== undefined) {
    return memo[n]; // 계산된 값이 있다면 재사용
  }
  // 계산되지 않은 경우 재귀 호출을 통해 값을 계산하고 저장
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};

fibonacci(40);

for (let i = 1; i <= testCase; i++) {
  const n = input[i];
  if (n === 0) console.log(1, 0);
  else console.log(memo[n - 1], memo[n]);
}

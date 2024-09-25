// 백준 9009 실버1
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const pibo = [0, 1];

// 가장 큰 값의 피보나치 인덱스
// 값보다 커질때 스탑.
// 가장 큰 값의 피보나치를 찾는다.
const findIndex = (num) => {
  let idx = 0;
  while (pibo[idx] <= num) {
    idx += 1;
    if (idx === pibo.length) {
      pibo.push(pibo[idx - 2] + pibo[idx - 1]);
    }
  }
  return idx - 1;
};

const solution = (testcase) => {
  const answer = [];
  let num = testcase;
  while (num > 0) {
    const idx = findIndex(num);
    answer.push(pibo[idx]);
    num = num - answer.at(-1);
  }
  return answer.reverse();
};

for (let i = 1; i <= input[0]; i++) {
  const answer = solution(input[i]);
  console.log(answer.join(" "));
}

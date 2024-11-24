//10986 골3 혼자풀기 실패(이해하기 어려웠음. 아직도 머리 안돌아감)
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input[0];
const data = input[1];
const p = new Array(n + 1).fill(0);
const counter = new Array(m).fill(0);
let answer = 0;

let sum = 0;
data.forEach((num, i) => {
  sum += num;
  p[i + 1] = sum % m;

  counter[p[i + 1]] += 1;
});

counter[0] += 1; //p[0]%m == 0이므로 이 경우도 추가.

for (let i = 0; i < m; i++) {
  if (counter[i] > 1) {
    answer += parseInt((counter[i] * (counter[i] - 1)) / 2);
  }
}

console.log(answer);

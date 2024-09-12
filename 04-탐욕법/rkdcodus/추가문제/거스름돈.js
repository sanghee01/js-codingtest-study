// 백준 14916 실버 5

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = input;
let answer = 0;

while (n > 0) {
  if (n % 5 === 0) break;
  n -= 2;
  answer += 1;
}

answer += Math.floor(n / 5);

if (n < 0) console.log(-1);
else console.log(answer);

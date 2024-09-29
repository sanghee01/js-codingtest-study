// 백준 2930 실버4

let input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let answer = 0;

while (true) {
  if (input % 5 === 0) break;
  if (input < 5) break;
  input -= 3;
  answer += 1;
}

if (input < 5) {
  if (input === 3) answer += 1;
  else answer = -1;
} else {
  answer += input / 5;
}

console.log(answer);

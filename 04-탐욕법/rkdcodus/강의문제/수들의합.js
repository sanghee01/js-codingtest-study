// 백준 1789 실버 5
let input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = 1;
let S = 1;

while (S <= input) {
  n += 1;
  S += n;
}

console.log(n - 1);

// 1806 골4 혼자풀기실패
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, s] = input[0];
const arr = input[1];
let answer = 1e9;

let start = 0;
let end = 0;
let sum = arr[end];

while (start < n) {
  while (end < n - 1 && sum < s) {
    end += 1;
    sum += arr[end];
  }

  if (sum >= s) {
    answer = Math.min(answer, end - start + 1);
  }

  sum -= arr[start];
  start += 1;
}

if (answer == 1e9) return console.log(0);
console.log(answer);

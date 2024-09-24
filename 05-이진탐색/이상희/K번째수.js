const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.map(Number);

let start = 1;
let end = N * N;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }
  if (total >= K) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(result);

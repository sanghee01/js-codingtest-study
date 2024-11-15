const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = arr[start];
let count = 0;

while (end < N) {
  if (sum < M) {
    end++;
    sum += arr[end];
  } else if (sum > M) {
    sum -= arr[start];
    start++;
  } else if (sum === M) {
    count++;
    sum -= arr[start];
    start++;
  }
}

console.log(count);

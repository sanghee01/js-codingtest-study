const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const limit = Number(input[1]);
let start = 0;
let end = Math.max(...arr);
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) {
      sum += mid;
    } else {
      sum += arr[i];
    }
  }
  if (sum > limit) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(end);

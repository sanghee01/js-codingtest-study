//https://www.acmicpc.net/problem/2805
//나무 자르기
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
let start = 0;
let end = Math.max(...arr);
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) {
      sum += arr[i] - mid;
    }
  }

  if (sum >= M) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(end);

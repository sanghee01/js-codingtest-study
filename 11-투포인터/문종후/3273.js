const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let x = Number(input[2]);
let arr1 = input[1].split(" ").map(Number);

let bs = function (arr, target, start, end) {
  let mid = 0;
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);
    if (target === arr[mid]) return 1;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return 0;
};

arr1.sort((a, b) => a - b);

let count = 0;
for (let i = 0; i < n; i++) {
  count += bs(arr1, x - arr1[i], 0, n - 1);
}

console.log(Math.floor(count / 2));

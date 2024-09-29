const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = input[3].split(" ").map(Number);

const answer = [];

for (let i = 0; i < M.length; i++) {
  answer.push(countByRange(N, M[i]));
}

console.log(answer.join(" "));

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, value) {
  let rightIndex = upperBound(arr, value, 0, arr.length);
  let leftIndex = lowerBound(arr, value, 0, arr.length);
  return rightIndex - leftIndex;
}

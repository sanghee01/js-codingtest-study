const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let intervalSum = arr[0];
let minLength = N + 1;

while (start <= end && end < N) {
  if (intervalSum >= S) {
    minLength = Math.min(minLength, end - start + 1);
    intervalSum -= arr[start];
    start++;
  } else if (intervalSum < S) {
    end++;
    intervalSum += arr[end];
  }
}

if (minLength === N + 1) console.log(0);
else console.log(minLength);

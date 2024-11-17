const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const X = Number(input[2]);

arr.sort((a, b) => a - b);

let start = 0;
let end = N - 1;
let count = 0;

while (start < end) {
  const sum = arr[start] + arr[end];

  if (sum === X) {
    count++;
    start++;
    end--;
  } else if (sum < X) {
    start++;
  } else {
    end--;
  }
}

console.log(count);

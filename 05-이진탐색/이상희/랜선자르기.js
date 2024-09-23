let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);

input.shift();
const arr = input.map(Number);

let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    total += parseInt(x / mid);
  }

  if (total >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

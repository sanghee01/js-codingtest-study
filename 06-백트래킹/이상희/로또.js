let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

for (let x of input) {
  let arr = x.split(" ").map(Number);
  isUsed = new Array(arr.length - 1).fill(false);
  numbers = [];
  k = arr.shift();
  answer = "";
  recur(arr, 0, 0);
  console.log(answer);
}

function recur(arr, depth, start) {
  if (depth === 6) {
    answer += numbers.join(" ") + "\n";
    return;
  }
  for (let i = start; i < k; i++) {
    if (!isUsed[i]) {
      isUsed[i] = true;
      numbers.push(arr[i]);
      recur(arr, depth + 1, i + 1);
      isUsed[i] = false;
      numbers.pop();
    }
  }
}

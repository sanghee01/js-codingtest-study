const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
let [N, K] = input[0].split(" ").map(Number);
let count = 0;
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
for (let i = 0; i < arr.length; i++) {
  if (K < arr[i]) {
    continue;
  } else {
    const value = Math.floor(K / arr[i]);
    K -= value * arr[i];
    count += value;

    if (K === 0) {
      break;
    }
  }
}
console.log(count);

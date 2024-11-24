const input = require("fs").readFileSync("example.txt").toString().split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const prefix = [0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  prefix.push(sum);
}

let min = Number.MAX_VALUE;

for (let i = 1; i < N; i++) {
  for (let j = i; j < N; j++) {
    if (prefix[j] - prefix[i - 1] >= S) {
      console.log(j, i);
      min = Math.min(min, j - i + 1);
    }
  }
}
console.log(min);

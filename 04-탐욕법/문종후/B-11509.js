const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let status = Array.from({ length: 1000001 }, () => 0);

let arrow = 0;
for (let i = 0; i < N; i++) {
  if (status[arr[i]] === 0) {
    arrow++;
  } else {
    status[arr[i]]--;
  }
  status[arr[i] - 1]++;
}
console.log(arrow);

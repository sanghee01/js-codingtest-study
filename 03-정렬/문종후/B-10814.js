const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = Number(input[0]);
const arr = [];
for (let i = 1; i <= number; i++) {
  arr.push(input[i].split(" "));
}

const answer = arr.sort(function (a, b) {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
});

for (let i = 0; i < answer.length; i++) {
  console.log(arr[i][0] + " " + arr[i][1]);
}

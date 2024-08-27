//https://www.acmicpc.net/problem/4344
//평균은 넘겠지
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = Number(input[0]);
for (let i = 1; i <= number; i++) {
  let sum = 0;
  arr = input[i].split(" ").map(Number);
  let n = arr[0];

  for (let j = 1; j <= n; j++) {
    sum += arr[j];
  }
  let average = sum / n;
  let count = 0;
  for (let j = 1; j < arr.length; j++) {
    if (average < arr[j]) {
      count += 1;
    }
  }
  let answer = (100 * count) / (arr.length - 1);
  console.log(`${answer.toFixed(3)}%`);
}

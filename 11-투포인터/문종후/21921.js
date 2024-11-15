// 백준-블로그,
//유형: 투포인터
//문제링크:https://www.acmicpc.net/problem/21921
//난이도:실버3
//TODO: arr 배열만드는부분다시볼것

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];
let sum = 0;

for (let i = 0; i < N; i++) {
  if (i <= X) sum += arr[i];
}

let maxSum = sum;
let count = 1;
let left = 1;
let right = X;
while (true) {
  left += 1;
  right += 1;
  if (right > N) break;
  sum = sum + arr[right] - arr[left - 1];
  if (maxSum == sum) count += 1;
  else if (maxSum < sum) {
    maxSum = sum;
    count = 1;
  }
}

if (maxSum === 0) console.log("SAD");
else {
  console.log(maxSum);
  console.log(count);
}

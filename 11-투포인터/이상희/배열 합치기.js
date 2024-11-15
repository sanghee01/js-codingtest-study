const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

let result = [];
let i = 0;
let j = 0;

// 배열 A와 배열 B에서 차례대로 더 작은 원소 넣기
while (i < n && j < m) {
  if (a[i] < b[j]) {
    result.push(a[i]);
    i += 1;
  } else {
    result.push(b[j]);
    j += 1;
  }
}

// 각 배열에 남아있는 원소들을 순차적으로 삽입
while (i < n) {
  result.push(a[i]);
  i += 1;
}
while (j < m) {
  result.push(b[j]);
  j += 1;
}

console.log(result.join(" "));

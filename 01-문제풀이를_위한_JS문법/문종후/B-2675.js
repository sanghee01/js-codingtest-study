//https://www.acmicpc.net/problem/2675
//문자열 반복
//TODO:시간초과 다시풀것
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
let answer = "";
for (let i = 1; i <= T; i++) {
  let arr = input[i].split(" ");
  const repeat = Number(arr[0]);
  const string = arr[1];
  for (let j = 0; j < string.length; i++) {
    answer += string[j].repeat(repeat);
  }
  answer += "\n";
}
console.log(answer);

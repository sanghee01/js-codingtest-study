//https://www.acmicpc.net/problem/2438
//별찍기-1
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

for (let i = 1; i <= input[0]; i++) {
  console.log("*".repeat(i));
}

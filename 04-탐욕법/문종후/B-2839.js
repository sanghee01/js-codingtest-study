//https://www.acmicpc.net/problem/2839
//설탕배달
const input = require("fs").readFileSync("example.txt").toString().trim();
let N = Number(input);
let count = 0;

while (true) {
  if (N === 0) {
    console.log(count);
    return;
  }
  if (N % 5 === 0) {
    count += Math.floor(N / 5);
    N = N % 5;
  } else {
    N -= 3;
    count++;
  }
}

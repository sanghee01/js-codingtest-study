const [a, b] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = b.length - 1; i >= 0; i--) {
  answer += a * b[i] + "\n";
}
answer += a * b;

console.log(answer);

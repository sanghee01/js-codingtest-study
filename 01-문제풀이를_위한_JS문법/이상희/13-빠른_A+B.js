const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = Number.MIN_SAFE_INTEGER;
let pos;

for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    pos = i + 1;
  }
}

console.log(max + "\n" + pos);

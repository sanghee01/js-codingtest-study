const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let list = new Set();

for (let i = 0; i < input.length; i++) {
  list.add(input[i] % 42);
}

console.log(list.size);

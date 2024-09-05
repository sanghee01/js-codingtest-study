const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let list = [...new Set(input)];

function compare(a, b) {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
}

console.log(list.sort(compare).join("\n"));

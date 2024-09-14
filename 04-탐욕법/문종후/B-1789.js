const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();
let S = Number(input);
function sum(n) {
  return (n * (n + 1) * 1) / 2;
}

let x = 1;

while (sum(x) <= S) {
  x++;
}

console.log(x - 1);

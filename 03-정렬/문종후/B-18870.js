const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = input.shift();
let map = new Map();

let arr = [
  ...new Set(
    input[0]
      .split(" ")
      .map(Number)
      .slice()
      .sort((a, b) => a - b)
  ),
];

arr.forEach((n, i) => map.set(n, i));
let line = input[0].split(" ").map(Number);
let str = "";
for (let i = 0; i < line.length; i++) {
  str += map.get(line[i]) + " ";
}
console.log(str);

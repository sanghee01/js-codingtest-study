const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const list = [];
let answer = "";

function compare(a, b) {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
}

for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  list.push([x, y]);
}

list.sort(compare);

for (let i = 0; i < N; i++) {
  answer += list[i][0] + " " + list[i][1] + "\n";
}

console.log(answer);

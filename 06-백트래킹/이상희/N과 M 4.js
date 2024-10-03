const [N, M] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
let answer = "";

function recur(depth, start) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  for (let i = start; i <= N; i++) {
    result.push(i);
    recur(depth + 1, i);
    result.pop();
  }
}

recur(0, 1);
console.log(answer);

const [N, M] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
let answer = "";

function recur(depth) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    result.push(i);
    recur(depth + 1);
    result.pop();
  }
}

recur(0);
console.log(answer);

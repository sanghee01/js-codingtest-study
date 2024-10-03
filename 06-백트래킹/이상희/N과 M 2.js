const [N, M] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
const isVisited = new Array(N + 1).fill(false);
let answer = "";

function recur(depth, start) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  for (let i = start; i <= N; i++) {
    if (!isVisited[i]) {
      isVisited[i] = true;
      result.push(i);
      recur(depth + 1, i + 1);
      isVisited[i] = false;
      result.pop();
    }
  }
}

recur(0, 1);
console.log(answer);

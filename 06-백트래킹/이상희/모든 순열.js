const N = Number(require("fs").readFileSync("../../input.txt").toString());

const list = [];
const isVisited = new Array(N + 1).fill(false);
let answer = "";

function recur(depth) {
  if (depth === N) {
    answer += list.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!isVisited[i]) {
      isVisited[i] = true;
      list.push(i);
      recur(depth + 1);
      isVisited[i] = false;
      list.pop();
    }
  }
}

recur(0);
console.log(answer);

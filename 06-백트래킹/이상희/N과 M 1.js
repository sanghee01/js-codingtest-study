const [N, M] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(N, M) {
  const list = new Array(M).fill(0);
  const isVisited = new Array(N).fill(false);
  let answer = "";

  function dfs(depth) {
    if (depth === M) {
      const arr = [];
      for (let i = 0; i < M; i++) {
        arr.push(list[i]);
      }
      return (answer += `${arr.join(" ")}\n`);
    }
    for (let i = 1; i <= N; i++) {
      if (!isVisited[i]) {
        list[depth] = i;
        isVisited[i] = true;
        dfs(depth + 1);
        isVisited[i] = false;
      }
    }
  }

  dfs(0);
  return answer;
}

console.log(solution(N, M));

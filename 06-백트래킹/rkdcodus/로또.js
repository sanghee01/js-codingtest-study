// 백준 6603 실버2
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 집합 S에서 6개의 수를 고를 때 중복 없음.
// 사전 순 출력
let answer = "";
let selected = [];
const dfs = (k, arr, visited, depth) => {
  if (depth === 6) {
    answer += selected.join(" ");
    answer += "\n";
    return;
  }

  for (let i = 0; i < k; i++) {
    if (visited[i]) continue;
    if (selected && selected.at(-1) > arr[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(k, arr, visited, depth + 1);
    visited[i] = false;
    selected.pop();
  }
};

for (let i = 0; i < input.length - 1; i++) {
  selected = [];
  const visited = new Array(input[i][0]).fill(false);
  dfs(input[i][0], input[i].slice(1), visited, 0);
  answer += "\n";
}

console.log(answer);

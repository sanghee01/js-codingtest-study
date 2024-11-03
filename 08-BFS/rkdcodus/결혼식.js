// 5567 백준 실버2

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 상근이의 친구의 친구까지만 초대한다.
// 상근이의 친구, 친구의 친구라면 큐에 넣는다. 이때 몇번째 가지인지 정보 같이 넣는다. [n, count] count 2까지 초대가능
// count 3 이상이면 무시, 방문했던 친구라면 무시

const n = input[0][0];
const m = input[1][0];
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);
let answer = 0;

for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = (num) => {
  const queue = [[num, 0]];
  visited[num] = true;

  while (queue.length) {
    const [n, count] = queue.shift();

    for (let i of graph[n]) {
      if (visited[i]) continue;
      if (count + 1 > 2) continue;
      visited[i] = true;
      queue.push([i, count + 1]);
      answer += 1;
    }
  }
};

bfs(1);
console.log(answer);

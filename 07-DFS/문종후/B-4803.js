const [in1, ...in2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = in1.split(" ").map(Number);

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dfs(start, end) {
    const stack = [{ node: start }];
    const distance = Array.from({ length: N + 1 }, (_) => 0);
    const isVisited = { [start]: true };
    while (stack.length) {
      const currentVertex = stack.pop();
      this.adjacencyList[currentVertex.node].forEach((neighbor) => {
        if (!isVisited[neighbor.node]) {
          distance[neighbor.node] =
            distance[currentVertex.node] + neighbor.weight;
          if (neighbor.node === end) return distance[end];
          isVisited[neighbor.node] = true;
          stack.push(neighbor);
        }
      });
    }
    return distance[end];
  }
}

const tree = new WeightedGraph();
const answer = [];

for (let i = 1; i <= N; i++) {
  tree.addVertex(i);
}

for (let i = 0; i < N - 1; i++) {
  const [v1, v2, weight] = in2[i].split(" ").map(Number);
  tree.addEdge(v1, v2, weight);
}

for (let i = N - 1; i < N - 1 + M; i++) {
  const [start, end] = in2[i].split(" ").map(Number);
  answer.push(tree.dfs(start, end));
}

console.log(answer.join("\n"));

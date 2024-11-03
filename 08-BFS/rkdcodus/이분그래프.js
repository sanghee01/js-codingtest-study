// 백준 1707 골드4
// 이분 그래프 : 인접한 정점이 같은 색이 아니다.
// 정점을 방문하다가 만약 같은 레벨에서 정점을 다른 색으로 칠해야한다면 무조건 이분그래프가 아니다.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 인접리스트 만들기
// 2. 정점 v개만큼 방문처리 리스트 만들기 초기값 0
// 3. bfs로 정점 탐색
// 4. 현재 노드 방문 처리 prev 색에 반대되는 색번호 저장
// 5. 인접 노드들 중 방문한 노드들은 색 비교 (현재노드와 색이 달라야함. => 같다면 return false)
// 6. 인접 노드들 중 방문하지 않은 노드들은 큐에 저장
// 7. 큐가 무사히 끝나면 true
// 8. 연결그래프 비연결 그래프 고려 => 정점이 모두 방문처리되어있을 때까지 bfs 돌리기.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(item) {
    const node = new Node(item);

    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.size += 1;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;

    if (!this.head) this.tail = null;
    this.size -= 1;

    return node.value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const bfs = (graph, visited, node) => {
  const queue = new Queue();
  queue.enqueue([node, 0]);
  visited[0] = 1;

  while (!queue.isEmpty()) {
    const [cur, prev] = queue.dequeue();
    // 현재 노드 방문 처리, 전 노드의 색깔과 다르게 처리.
    if (visited[prev] === 1) {
      visited[cur] = 2;
    } else if (visited[prev] === 2) {
      visited[cur] = 1;
    }

    // 현재 노드와 인접한 노드 탐색
    for (let i of graph[cur]) {
      // 방문한 노드라면 현재 노드와 색 비교
      if (visited[i] === visited[cur]) {
        return false;
      } else if (visited[i] === 0) {
        // 방문 안한 노드라면 큐에 추가
        queue.enqueue([i, cur]);
      }
    }
  }
  return true;
};

const tc = input[0][0];
let line = 1;

for (let i = 0; i < tc; i++) {
  let answer = "YES";
  const [v, e] = input[line];
  const graph = Array.from({ length: v + 1 }, () => []);
  const visited = Array.from({ length: v + 1 }, () => 0);

  // 인접 리스트 만들기
  for (let j of input.slice(line + 1, line + 1 + e)) {
    graph[j[0]].push(j[1]);
    graph[j[1]].push(j[0]);
  }

  // bfs 탐색
  for (let l = 1; l < v + 1; l++) {
    if (visited[l]) continue;
    if (!bfs(graph, visited, l)) {
      answer = "NO";
      break;
    }
  }
  console.log(answer);

  line += e + 1;
}

// 16953 백준 실버2

// 범위를 초과하면 만들수 없는 경우라 판단하여 -1 출력
// set 객체 사용하여 방문했던 숫자라면 무시.

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

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b] = input;
let answer = 0;

const bfs = () => {
  const queue = new Queue();
  queue.enqueue([a, 1]);
  const set = new Set([a]);

  while (!queue.isEmpty()) {
    const [num, count] = queue.dequeue();
    if (num > 1e9) continue;
    if (num === b) {
      answer = count;
      break;
    }

    for (let i of ["*", "1"]) {
      let next = num;
      if (i === "*") next = num * 2;
      else if (i === "1") next = +(String(num) + "1");

      if (set.has(next)) continue;
      queue.enqueue([next, count + 1]);
    }
  }
};

bfs();

if (answer) console.log(answer);
else console.log(-1);

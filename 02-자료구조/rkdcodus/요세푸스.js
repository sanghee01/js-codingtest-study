// 백준 1158

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

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

const queue = new Queue();
const answer = [];
let k = 1;

for (let i = 1; i < input[0] + 1; i++) {
  queue.enqueue(i);
}

while (!queue.isEmpty()) {
  if (k === input[1]) {
    answer.push(queue.dequeue());
    k = 1;
    continue;
  }

  const value = queue.dequeue();
  queue.enqueue(value);
  k += 1;
}

console.log(`<${answer.join(", ")}>`);

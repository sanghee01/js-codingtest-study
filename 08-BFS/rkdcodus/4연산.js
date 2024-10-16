// 백준 14395 골4
// 혼자풀기 실패

/* 
4가지 방법을 모두 시행한 후 나온 4가지 값에서 또 4가지 방법을 시행.
범위를 초과하면 바꿀 수 없는 경우로 판단하고 -1 출력
같은 경우에는 0 출력
값 방문처리는 set 함수 사용. 계산값이 이미 방문한 숫자라면 무시.
queue에는 숫자와 연산자기록 저장. 

**연산자 사전 순, set 객체 사용하여 방문처리, queue에 저장할 때 연산자 기록을 함께.**
*/

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
let answer = "";
const [s, t] = input;

const visited = new Set([s]);

if (s === t) return console.log(0);

const bfs = () => {
  const queue = new Queue();
  queue.enqueue([s, ""]);

  while (!queue.isEmpty()) {
    const [num, opers] = queue.dequeue();
    if (num > 1e9) continue;
    if (num === t) {
      answer = opers;
      break;
    }

    for (let oper of ["*", "+", "-", "/"]) {
      // num 값은 다른 연산자 계산에 또 쓰여야하므로 값이 변경되선 안됌. next에 복사 후 계산.
      let next = num;
      if (oper === "*") next *= num;
      else if (oper === "+") next += num;
      else if (oper === "-") next -= num;
      else if (oper === "/" && num !== 0) next = 1;

      if (!visited.has(next)) {
        queue.enqueue([next, opers + oper]);
        visited.add(next);
      }
    }
  }
};

bfs();

if (answer) console.log(answer);
else console.log(-1);

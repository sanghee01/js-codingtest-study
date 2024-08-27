/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1158                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1158                           #+#        #+#      #+#    */
/*   Solved: 2024/08/11 16:45:18 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// class Queue {
//   constructor() {
//     this.items = [];
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }

//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }

//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;

//     return item;
//   }

//   peak() {
//     return this.items[this.headIndex];
//   }

//   getLength() {
//     return this.tailIndex - this.headIndex;
//   }
// }

const [N, K] = input[0].split(" ").map(Number);

const arr = Array.from({ length: N + 1 }, (v, i) => i);

const order = [];

const queue = arr.slice(1);

let idx = 1;
while (queue.length) {
  if (idx > K) idx -= K;

  const item = queue.shift();
  if (idx % K === 0) {
    order.push(item);
  } else {
    queue.push(item);
  }

  idx++;
}

console.log(`<${order.join(", ")}>`);

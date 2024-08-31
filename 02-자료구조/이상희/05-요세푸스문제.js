const [N, K] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from({ length: N }, (v, i) => i + 1);
const answer = [];

while (queue.length > 0) {
  // 큐를 k-1만큼 회전시킴
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift()); // 큐의 첫 번째 요소를 뒤로 이동
  }

  // k번째 사람을 제거하고 결과에 추가
  answer.push(queue.shift());
}

console.log(`<${answer.join(", ")}>`);

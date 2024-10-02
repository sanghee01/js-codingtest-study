/**
 * 1. 아이디어
 * 백트래킹, 재귀함수 안에서, for 돌면서 숫자 선택(이때 방문여부 확인)
 * 재귀함수에서 M개를 선택할 경우 print
 *
 * 2. 시간복잡도
 * N! > 가능
 *
 * 3. 자료구조
 * - 결과값 저장 int[]
 * - 방문여부 체크 bool[]
 */

const [N, M] = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
const isVisited = new Array(N + 1).fill(false);
let answer = "";

function recur(depth) {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!isVisited[i]) {
      isVisited[i] = true;
      result.push(i);
      recur(depth + 1);
      isVisited[i] = false;
      result.pop();
    }
  }
}

recur(0);
console.log(answer);

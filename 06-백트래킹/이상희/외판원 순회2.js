let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = []; // 비용 행렬
for (let x of input) arr.push(x.split(" ").map(Number));

const route = []; // 현재 경로
const isVisited = new Array(N).fill(false);

let minCost = Number.MAX_SAFE_INTEGER;
let sumCost = 0;

function recur(depth) {
  sumCost = 0;
  if (depth === N) {
    if (arr[route[N - 1]][route[0]] === 0) return; // 마지막에 경로 없는 경우
    for (let i = 0; i < N - 1; i++) {
      if (arr[route[i]][route[i + 1]] === 0) {
        // 경로가 없는 경우
        return;
      }

      sumCost += arr[route[i]][route[i + 1]];
    }
    sumCost += arr[route[N - 1]][route[0]]; // 마지막 경로 처리

    if (sumCost < minCost) {
      minCost = sumCost;
    }

    return;
  }
  for (let i = 0; i < N; i++) {
    if (!isVisited[i]) {
      isVisited[i] = true;
      route.push(i);
      recur(depth + 1);
      isVisited[i] = false;
      route.pop();
    }
  }
}

recur(0);
console.log(minCost);

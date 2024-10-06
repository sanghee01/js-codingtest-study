let arr = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(arr.shift());
const ingredients = [];
const isUsed = new Array(N).fill(false);

let minDiffer = Number.MAX_SAFE_INTEGER;

function recur(depth, start) {
  if (depth >= 1) {
    let sumDiffer = 0;
    let sTotal = 1;
    let bTotal = 0;
    for (let i = 0; i < ingredients.length; i++) {
      let [S, B] = ingredients[i].split(" ").map(Number);
      sTotal *= S;
      bTotal += B;
    }
    sumDiffer = Math.abs(sTotal - bTotal);
    if (minDiffer > sumDiffer) minDiffer = sumDiffer;
  }
  for (let i = start; i < N; i++) {
    if (!isUsed[i]) {
      isUsed[i] = true;
      ingredients.push(arr[i]);
      recur(depth + 1, i + 1);
      isUsed[i] = false;
      ingredients.pop();
    }
  }
}

recur(0, 0);
console.log(minDiffer);

let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const k = Number(input.shift());
const signs = input[0].split(" ");
const numbers = [];
const visited = new Array(10).fill(false);
let maxNum = 0;
let minNum = Number.MAX_SAFE_INTEGER;

function recur(depth) {
  let curNum = "";
  if (depth === k + 1) {
    for (let i = 0; i < k; i++) {
      if (signs[i] === "<") {
        if (numbers[i] >= numbers[i + 1]) return;
        curNum += numbers[i];
      } else if (signs[i] === ">") {
        if (numbers[i] <= numbers[i + 1]) return;
        curNum += numbers[i];
      }
    }
    curNum += numbers.at(-1); // 마지막 숫자의 경우

    if (Number(curNum) > Number(maxNum)) maxNum = curNum;
    if (Number(curNum) < Number(minNum)) minNum = curNum;
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (!visited[i]) {
      visited[i] = true;
      numbers.push(i);
      recur(depth + 1);
      visited[i] = false;
      numbers.pop();
    }
  }
}

recur(0);
console.log(maxNum);
console.log(minNum);

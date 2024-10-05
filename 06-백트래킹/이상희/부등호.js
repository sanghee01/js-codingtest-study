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
  if (depth === k + 1) {
    // 부등호 조건 체크
    for (let i = 0; i < k; i++) {
      if (signs[i] === "<" && numbers[i] >= numbers[i + 1]) return;
      if (signs[i] === ">" && numbers[i] <= numbers[i + 1]) return;
    }

    const curNum = numbers.join(""); // 배열을 문자열로 변환

    // 가장 큰 수와 가장 작은 수 갱신
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

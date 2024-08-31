const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  let checker = [];
  let list = input[i].split("");
  let isGroupWord = true;
  for (let j = 0; j < list.length; j++) {
    if (!checker.includes(list[j])) {
      checker.push(list[j]);
    } else if (j !== 0 && list[j] !== list[j - 1]) {
      isGroupWord = false;
      if (isGroupWord) break;
    }
  }
  if (isGroupWord) count++;
}

console.log(count);

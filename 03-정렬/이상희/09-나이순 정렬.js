const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const list = new Map(); // 가입한 순을 파악하기 위해 Map 객체 씀

for (let i = 1; i <= Number(input[0]); i++) {
  let people = input[i].split(" ");
  list.set(i, people);
}

function compare(a, b) {
  if (a[1][0] === [1][0]) return a[0] - b[0]; // 나이가 같다면 가입 순
  return a[1][0] - b[1][0];
}

let sortList = [...list.entries()].sort(compare); // 배열로 만든 뒤 정렬

let answer = "";

for (let x of sortList) {
  answer += x[1].join(" ") + "\n";
}

console.log(answer);

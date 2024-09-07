const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const list = input[1].split(" ").map(Number);

let setList = [...new Set(list)]; // 중복 없애기 위함
setList.sort((a, b) => a - b);

let mapList = new Map(); // index와 key-value 쌍을 만들기 위함

for (let i = 0; i < setList.length; i++) {
  mapList.set(setList[i], i);
}

let answer = "";

for (let x of list) {
  answer += mapList.get(x) + " "; // 해당하는 index로 매핑
}

console.log(answer);

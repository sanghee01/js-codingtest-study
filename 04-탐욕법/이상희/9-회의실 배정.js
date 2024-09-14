const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const list = [];

// 회의 정보를 배열에 저장
for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  list.push([start, end]);
}

// 종료 시간을 기준으로, 종료 시간이 같으면 시작 시간을 기준으로 정렬
list.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]; // 종료 시간이 같으면 시작 시간으로 정렬
  }
  return a[1] - b[1]; // 종료 시간 기준으로 정렬
});

let count = 0;
let lastEndTime = 0;

for (let i = 0; i < N; i++) {
  const [start, end] = list[i];

  // 이전 회의가 끝나는 시간 이후에 시작하는 회의만 선택
  if (start >= lastEndTime) {
    count++;
    lastEndTime = end;
  }
}

console.log(count);

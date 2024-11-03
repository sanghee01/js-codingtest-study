let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .split("\n");

let [s, t] = input[0].split(" ").map(Number);

// BFS 수행
let queue = []; // (값, 해당 값을 만들기 위한 연산자) 삽입
queue.push([s, ""]);
let visited = new Set([s]);
let found = false;

// 시작 값과 목표 값이 같은 경우
if (s === t) {
  console.log(0);
  process.exit();
}

// 큐가 빌 때까지 반복
while (queue.length !== 0) {
  let [value, opers] = queue.shift();

  if (value > 1e9) continue; // 값의 범위를 벗어나는 경우
  // 목표 값에 도달한 경우
  if (value === t) {
    console.log(opers); // 전체 연산자들을 출력
    found = true;
    break;
  }

  // 각 연산자로 BFS 수행
  for (let oper of ["*", "+", "-", "/"]) {
    let nextValue = value;
    if (oper === "*") nextValue *= value;
    if (oper === "+") nextValue += value;
    if (oper === "-") nextValue -= value;
    if (oper === "/" && value !== 0) nextValue = 1;

    if (!visited.has(nextValue)) {
      queue.push([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

// 바꿀 수 없는 경우
if (!found) console.log(-1);

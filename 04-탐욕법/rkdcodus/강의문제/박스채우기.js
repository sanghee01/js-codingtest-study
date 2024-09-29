// 백준 골드 2 https://www.acmicpc.net/problem/1493
// 혼자 풀기 실패

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// x보다 작거나 같으면서 가장 가까운 2^i 찾기.
const nearestSquare = (x) => {
  let i = 1;
  while (2 ** i <= x) {
    i += 1;
  }
  return i - 1;
};

const boxSize = input[0];

const [length, width, height] = boxSize;
const cubes = Array(20).fill(0);

let n = input[1][0];

// i가 1 ~ 20인 큐브들의 개수를 배열에 저장.
for (let i = 2; i <= n + 1; i++) {
  const a = input[i][0];
  const b = input[i][1];
  cubes[a] = b;
}

// length, width, height에 들어갈 수 있는 가장 큰 큐브의 i 찾기..
// length, width, height 모두 충족해야하기때문에 min을 찾는 것임.
let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0; // 사용한 큐브 수

// 가능한 가장 큰 큐브의 사이즈부터 시작.
for (let i = size; i >= 0; i--) {
  used *= 8;
  const cur = 2 ** i; // 현재 큐브의 길이

  // 채워 넣어야할 큐브의 개수 계산
  const required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;

  const usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수.
  res += usage;
  used += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);

// 내가 잘 이해를 못했던 이유: 큐브를 넣고 남은 공간이 제각각인데 거기에 어떻게 더 작은 큐브를 넣을지만을 생각했음.
// 큰 큐브가 얼마나 들어갈 수 있는지 확인은 해야힘.
// 하지만 큰 큐브가 들어갈 수 있다는 것은 그보다 작은 큐브로도 대체가 가능하단 소리.
// 그래서 큰큐브가 들어가고 남은 공간에서 작은 큐브를 세는 것이 아니라
// 전체 공간에 작은 큐브로 채우고 큰큐브로 대체하면 됌.
// 그래서 used를 빼주는 것임.

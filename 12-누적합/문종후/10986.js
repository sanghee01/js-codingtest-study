const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const prefix = [0];
let sum = 0;
for (let i = 0; i < N; i++) {
  sum = sum + arr[i];
  prefix.push(sum);
}
let count = 0;
for (let i = 1; i <= N; i++) {
  for (let j = i; j <= N; j++) {
    if ((prefix[j] - prefix[i - 1]) % M === 0) {
      count++;
    }
  }
}
console.log(count);

//개선코드

// const fs = require("fs");
// const input = fs.readFileSync("example.txt").toString().split("\n");
// const [N, M] = input.shift().split(" ").map(Number);
// const arr = input[0].split(" ").map(Number);

// const modCount = new Array(M).fill(0);
// let prefixSum = 0;
// let count = 0;

// // 초기 상태: prefixSum % M === 0인 경우를 위해 modCount[0] = 1
// modCount[0] = 1;

// for (let i = 0; i < N; i++) {
//   prefixSum += arr[i];
//   const mod = ((prefixSum % M) + M) % M; // 음수 방지를 위해 모듈러 연산

//   // 동일한 나머지 값이 이전에 나온 횟수만큼 카운트 추가
//   count += modCount[mod];

//   // 현재 나머지 값 카운트 증가
//   modCount[mod]++;
// }

// console.log(count);

const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

let coins = [];
for (let i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

let count = 0; // 동전 개수
let balance = K; // 잔여액
let i = N; // 현재 동전 인덱스

// 잔여액 없을 때까지 동전 수 셈
while (balance > 0) {
  if (balance >= coins[i]) {
    balance -= coins[i];
    count++;
  } else {
    i--;
  }
}

console.log(count);

const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let prefixSum = 0;
let count = 0; // M으로 나누어떨어지는 부분합의 개수
const remainderCount = Array(M).fill(0); // 나머지 등장 횟수 저장 배열
remainderCount[0] = 1; // 초기 값: 누적합이 0인 경우도 부분합으로 계산

for (let i = 0; i < N; i++) {
  prefixSum += arr[i]; // 누적합 계산
  const remainder = prefixSum % M; // M으로 나눈 나머지
  const positiveRemainder = (remainder + M) % M; // 나머지가 음수일 경우, M을 더해 양수로 만듦

  count += remainderCount[positiveRemainder]; // 이전에 같은 나머지가 등장한 횟수를 더함
  remainderCount[positiveRemainder]++; // 현재 나머지 등장 횟수 증가
}

console.log(count);

// 백준 2512 실버 2

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 모든 요청이 배정될 수 있는지 확인한다.
// 모든 요청한 총 금액이 국가 예산 이하라면 가장 큰 요청 금액 출력.
//  => 정정. 이 과정은 필요 없음.
// 2. 불가능한 경우, 상한액을 계산한다.
// 상한액을 어떻게 계산할건지?
// 예산을 정렬한다.
// 1 ~ 높은 금액 사이를 두고 mid값을 상한액이라 가정한다.
// 계산 결과 국가 예산과 비교하여 가장 국가예산을 넘지 않는 금액을 찾는다.

const n = input[0];
const arr = input[1].sort((a, b) => a - b);
const nation = input[2];

const isOverNation = (upperLimit) => {
  let sum = 0;
  arr.forEach((i) => {
    // if (upperLimit >= i) sum += i;
    // else sum += upperLimit;
    sum += Math.min(upperLimit, i);
  });

  return sum <= nation ? true : false;
};

const findLimit = () => {
  let start = 1;
  let end = arr[n - 1];

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (isOverNation(mid)) start = mid + 1;
    else end = mid - 1;
  }

  return start - 1;
};

// if (isOverNation(arr[n - 1])) return console.log(arr[n - 1]); 굳이 필요없음.
console.log(findLimit());

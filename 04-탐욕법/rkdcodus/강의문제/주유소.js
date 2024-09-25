// 백준 13305 실버3
// 혼자 풀기 58점.

// BigInt를 써야하는 이유
// 3번 조건이 원래 제약 조건 이외 아무 조건이 없다인데 이 말은 즉슨, 원래 제약인 도시 양끝의 거리는 10^9 이하의 자연수까지, 리터당 가격도 10^9이하의 자연수까지 가능하다.
// 제일 크게 나올 수 있는 수는 10^9*10^9인데 이는 Number로 감당할 수 없는 크기이다. Number는 2^53 -1 (9 * 10^15) 이니까 BigInt를 써주어야한다.
// 쓸 때 유의할 점은 BigInt는 Number와 혼합되게 사용할 수 없다. 그리고 마지막 출력 시 문자열로 출력해야한다.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(BigInt));

const road = input[1];
const city = input[2];
let price = city[0];
let liter = BigInt(0); // 리터 양 축적
let answer = BigInt(0);

for (let i = 0; i < input[0]; i++) {
  // city에서의 리터당 가격이 price보다 작다면 price 업데이트, liter 값 만큼 저장된 price 곱하여 계산. liter 초기화
  // price 보다 크다면 liter 축적.
  if (i === input[0] - 1) {
    answer += price * liter;
    break;
  }

  if (city[i] < price) {
    answer += price * liter;
    liter = road[i];
    price = city[i];
    continue;
  }
  liter += road[i];
}

console.log(answer.toString());

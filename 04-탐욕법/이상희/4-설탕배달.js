let n = Number(require("fs").readFileSync("../../input.txt").toString());

let count = 0;
let isDone = false;

while (n >= 0) {
  // 먼저 5로 나눌 수 있는지 확인
  if (n % 5 === 0) {
    count += n / 5; // 5kg 봉지의 개수 더하기
    console.log(count);
    isDone = true;
  }
  n -= 3; // 5로 나눌 수 없으면 3kg 봉지 하나를 사용
  count++;
}

// n이 0보다 작아지면 정확히 나눌 수 없는 경우
if (!isDone) {
  console.log(-1);
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 테스트케이스 개수
let testCase = Number(input[0]);
// 출력할 결과
let answer = "";

function backtrack(n, depth, result, numbers) {
  if (depth == n - 1) {
    // 0이 되면 answer에 할당
    let calculate = result.join("");
    if (eval(calculate.replaceAll(" ", "")) == 0) answer += calculate + "\n";
    return;
  }

  for (let op of [" ", "+", "-"]) {
    result.push(op);
    if (depth != n - 1) result.push(numbers[depth + 1]);
    backtrack(n, depth + 1, result, numbers);
    result.pop();
    result.pop();
  }
}

// 테스트케이스 순회
for (let t = 1; t <= testCase; t++) {
  // 1부터 n까지 들어있는 배열
  let n = Number(input[t]);
  let numbers = Array.from({ length: n }, (v, i) => i + 1);
  let result = [numbers[0]];
  backtrack(n, 0, result, numbers);
  answer += "\n";
}
console.log(answer);

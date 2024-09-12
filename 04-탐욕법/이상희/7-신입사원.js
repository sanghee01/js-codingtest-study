const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let answer = [];
let start = 1;

// 테케 별로 나누기
for (let i = 0; i < T; i++) {
  let TLength = Number(input[start]); // 각 테케의 지원자 수
  let list = []; // 각 테케의 지원자 리스트

  // 각 테케별 지원자 배열 만들기
  for (let j = start + 1; j <= start + TLength; j++) {
    list.push(input[j].split(" ").map(Number));
  }

  // 서류 점수 기준 오름차순 정렬
  list.sort((a, b) => a[0] - b[0]);

  let count = 1; // 첫 번째 지원자는 무조건 채용
  let bestInterviewRank = list[0][1]; // 첫 번째 지원자의 면접 성적을 기준으로 설정

  // 두 번째 지원자부터 차례로 비교
  for (let k = 1; k < list.length; k++) {
    if (list[k][1] < bestInterviewRank) {
      count++;
      bestInterviewRank = list[k][1]; // 면접 성적이 더 좋은 지원자를 찾으면 갱신
    }
  }

  answer.push(count);
  start += TLength + 1;
}

console.log(answer.join("\n"));

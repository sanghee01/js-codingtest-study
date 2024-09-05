// 프로그래머스 42747 레벨 2

function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (answer >= citations[i]) break;
    answer += 1;
  }

  return answer;
}

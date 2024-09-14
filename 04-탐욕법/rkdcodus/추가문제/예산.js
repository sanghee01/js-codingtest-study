// 프로그래머스 12982 레벨1

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget < d[i]) break;
    budget -= d[i];
    answer += 1;
  }
  return answer;
}

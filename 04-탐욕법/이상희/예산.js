function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let x of d) {
    budget -= x;
    if (budget >= 0) answer++;
    else break;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));

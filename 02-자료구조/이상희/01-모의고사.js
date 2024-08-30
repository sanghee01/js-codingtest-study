function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0]; // 각 수포자가 맞힌 문제 수를 저장하는 배열
  const answer = []; // 가장 많이 맞힌 수포자의 번호를 저장할 배열

  // 정답지를 순회하며 각 수포자의 답과 비교
  for (let i = 0; i < answers.length; i++) {
    if (a[i % a.length] === answers[i]) count[0]++;
    if (b[i % b.length] === answers[i]) count[1]++;
    if (c[i % c.length] === answers[i]) count[2]++;
  }

  // 가장 많이 맞힌 문제 수를 찾음
  let maxCount = Math.max(...count);

  // 가장 많이 맞힌 사람을 answer 배열에 추가
  for (let i = 1; i <= count.length; i++) {
    if (maxCount === count[i - 1]) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

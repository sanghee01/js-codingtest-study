function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) count[0]++;
    if (two[i % two.length] === answers[i]) count[1]++;
    if (three[i % three.length] === answers[i]) count[2]++;
  }

  let maxCount = Math.max(...count);
  for (let i = 1; i <= 3; i++) {
    if (maxCount === count[i - 1]) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

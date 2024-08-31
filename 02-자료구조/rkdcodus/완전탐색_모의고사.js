// 프로그래머스 42840
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = {
    1: 0,
    2: 0,
    3: 0,
  };

  answers.forEach((answer, i) => {
    if (+answer === one[i % one.length]) count[1] += 1;
    if (+answer === two[i % two.length]) count[2] += 1;
    if (+answer === three[i % three.length]) count[3] += 1;
  });

  const max = Math.max(...Object.values(count));
  const result = Object.keys(count)
    .filter((key) => count[key] === max)
    .map(Number);

  return result.sort((a, b) => a - b);
}

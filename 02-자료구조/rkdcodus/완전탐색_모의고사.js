// 프로그래머스 42840
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 번호의 수포자들이 맞춘 정답 수를 저장하는 객체
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

  // 가장 많이 맞춘 정답 수 구하기
  const max = Math.max(...Object.values(count));

  // 정답 수가 max와 일치하는 수포자 찾기
  const result = Object.keys(count)
    .filter((key) => count[key] === max)
    .map(Number);

  return result.sort((a, b) => a - b);
}

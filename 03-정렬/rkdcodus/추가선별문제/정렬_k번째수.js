// 프로그래머스 42748 레벨 1

function solution(array, commands) {
  const answer = [];
  commands.forEach((element) => {
    const [i, j, k] = element;
    const sortedArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sortedArr[k - 1]);
  });
  return answer;
}

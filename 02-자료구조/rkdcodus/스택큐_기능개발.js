// 프로그래머스 42586

function solution(progresses, speeds) {
  const dates = [];
  const answer = [0];

  for (let i = 0; i < progresses.length; i++) {
    dates.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let index = 0;
  let maxDate = dates[0];

  dates.forEach((date) => {
    if (maxDate < date) {
      index += 1;
      answer.push(0);
      maxDate = date;
    }
    answer[index] += 1;
  });

  return answer;
}

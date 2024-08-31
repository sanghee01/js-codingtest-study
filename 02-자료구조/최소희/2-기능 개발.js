function solution(progresses, speeds) {
  var answer = [];
  const days = [];

  // 남은날들 계산
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let checkDay = 1;
  let comparedDay = days[0];

  for (let i = 1; i < progresses.length; i++) {
    if (comparedDay >= days[i]) checkDay++;
    else {
      answer.push(checkDay);
      comparedDay = days[i];
      checkDay = 1;
    }
  }
  answer.push(checkDay);

  return answer;
}

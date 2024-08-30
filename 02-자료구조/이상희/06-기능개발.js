function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    // 하루 작업
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    // 배포 카운트 세기
    let deployCount = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployCount++;
    }
    if (deployCount > 0) answer.push(deployCount);
  }

  return answer;
}

console.log(solution([95, 95, 95, 95], [4, 3, 2, 1]));

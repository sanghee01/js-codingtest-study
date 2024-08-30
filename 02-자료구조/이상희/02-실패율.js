function solution(N, stages) {
  const answer = [];
  const failValues = new Object();

  stages.sort((a, b) => a - b); // 오름차순 정렬

  let stageLength = stages.length; // 유저 수

  for (let i = 1; i <= N; i++) {
    let notClearStage = stages.filter((stage) => i === stage).length; // 스테이지에 도달했지만 클리어 못한 유저 수
    let failRetio; // 실패율

    if (notClearStage) failRetio = notClearStage / stageLength;
    else failRetio = 0; // 도달한 유저가 없는 경우 실패율 0

    failValues[i] = failRetio;
    stageLength -= notClearStage; // 그 다음 스테이지에 있는 유저 수
  }

  let sorted = Object.entries(failValues).sort((a, b) => b[1] - a[1]); // 실패율이 높은 순서대로 정렬

  sorted.forEach((x) => answer.push(Number(x[0]))); // 정렬된 배열의 스테이지 번호를 순서대로 답안 배열에 넣음

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

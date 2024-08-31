// 프로그래머스 42889
function solution(N, stages) {
  const rates = new Array(N + 1).fill(0);

  for (let stage = 1; stage <= N; stage++) {
    let reacher = 0;
    let loser = 0;

    stages.forEach((user_stage) => {
      if (user_stage >= stage) reacher += 1;
      if (user_stage === stage) loser += 1;
    });

    if (reacher !== 0) rates[stage] = loser / reacher;
  }

  const ratesMap = rates.map((rate, index) => ({ index, rate }));

  ratesMap.sort((a, b) => {
    if (b.rate === a.rate) return a.index - b.index;
    return b.rate - a.rate;
  });

  const result = ratesMap.filter((i) => i.index > 0).map((i) => i.index);

  return result;
}

function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    if (i === prices.length - 1) {
      answer.push(0);
      break;
    }
    const current = prices[i];

    let second = 0;

    for (let j = i + 1; j < prices.length; j++) {
      second++;
      const next = prices[j];

      if (current > next) {
        break;
      }
    }

    answer.push(second);
  }
  return answer;
}
console.log(solution([1, 2, 3, 2, 3]));

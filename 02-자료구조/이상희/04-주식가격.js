function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let time = 0; // 유지 시간
    for (let j = i + 1; j < prices.length; j++) {
      time++;
      if (prices[i] > prices[j]) break; // 가격이 떨어졌으면 시간 세는 것을 멈춤
    }
    answer.push(time);
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));

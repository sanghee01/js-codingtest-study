// * 플이 1 - 이중 반복문 이용 | 시간복잡도 O(n^2), 공간복잡도 O(1)
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

// * 풀이 2 - 스택 이용 | 시간복잡도 O(n), 공간복잡도 O(n)
function solution2(prices) {
  let answer = Array(prices.length).fill(0); // 답을 저장할 배열 초기화
  let stack = []; // 인덱스를 저장할 스택

  for (let current = 0; current < prices.length; current++) {
    // 현재 가격이 스택에 저장된 가격보다 낮다면, 가격이 떨어졌음을 의미
    while (
      stack.length > 0 &&
      prices[current] < prices[stack[stack.length - 1]]
    ) {
      let past = stack.pop(); // 스택에서 인덱스를 꺼냄
      answer[past] = current - past; // 가격이 떨어질 때까지의 기간을 저장
    }
    stack.push(current); // 현재 인덱스를 스택에 추가
  }

  // 스택에 남아있는 인덱스들은 끝까지 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    let past = stack.pop();
    answer[past] = prices.length - past - 1;
  }

  return answer;
}

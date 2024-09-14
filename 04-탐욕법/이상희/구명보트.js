function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b); // 오름차순 정렬

  let start = 0;
  let end = people.length - 1;

  // 투 포인터로 양쪽 끝에서부터 탐색
  while (start <= end) {
    // 가장 가벼운 사람(people[start])과 가장 무거운 사람(people[end))을 함께 태울 수 있는지 확인
    if (people[start] + people[end] <= limit) {
      start++; // 가벼운 사람 태움
    }
    // 무거운 사람은 무조건 태움
    end--; // 무거운 사람 태움
    answer++; // 보트 사용 횟수 증가
  }

  return answer;
}

console.log(solution([70, 80, 50], 100));

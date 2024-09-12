// 프로그래머스 탐욕법 42885 레벨2
function solution(people, limit) {
  const half = Math.floor(people.length / 2);
  let front = 0;
  let back = people.length - 1;
  let answer = 0;

  // 정렬 후 제일 가벼운 사람과 제일 무거운 사람의 합을 limit 과 비교해야 가장 최소한의 구명보트를 이용할 수 있음.
  // 가벼운 사람들끼리 태우면 후에 무거운 사람들은 혼자 구명보트 이용할 가능성 높아짐.
  people.sort((a, b) => a - b);

  while (front < back) {
    const sum = people[front] + people[back];

    if (sum > limit) {
      answer += 1;
      back -= 1;
    } else {
      answer += 1;
      back -= 1;
      front += 1;
    }
  }

  // front > back이 되었단 소리는 제일 가운데 두 사람이 구명보트에 탔다는 소리여서 +1 해줄 필요가 없다.
  // front와 back이 같다면 back만 구명보트에 탔다는 말이니까 남은 front를 태워야해서 +1 해줘야함.
  if (front === back) answer += 1;

  return answer;
}

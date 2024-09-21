//구명보트
//https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  while (people.length !== 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.pop();
      people.shift();
      answer++;
    } else {
      people.pop();
      answer++;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
// console.log(solution([70, 80, 50], 100));

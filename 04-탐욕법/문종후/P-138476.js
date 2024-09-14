//귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  let set = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    if (set.has(tangerine[i])) {
      set.set(tangerine[i], set.get(tangerine[i]) + 1);
    } else {
      set.set(tangerine[i], 1);
    }
  }
  let answer = [];
  for (let test of set) {
    answer.push(test);
  }
  answer.sort((a, b) => b[1] - a[1]);
  console.log(answer);

  return answer;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));

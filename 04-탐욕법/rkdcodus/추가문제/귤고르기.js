// 프로그래머스 138476 레벨2

function solution(k, tangerine) {
  // 중복 갯수 구하기.
  // 중복 많은 것부터 k개 채우기
  let answer = 0;
  const map = new Map();

  tangerine.forEach((i) => {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  });

  const arr = [...map.values()].sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) break;
    k -= arr[i];
    answer += 1;
  }

  return answer;
}

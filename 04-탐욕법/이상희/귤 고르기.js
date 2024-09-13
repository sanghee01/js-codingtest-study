function solution(k, tangerine) {
  // 종류별 개수를 세기 위한 Map
  const countMap = new Map();

  // 각 귤 크기별로 몇 개 있는지 카운팅
  for (let size of tangerine) {
    countMap.set(size, (countMap.get(size) || 0) + 1);
  }

  // 카운팅한 값을 배열로 만들어 내림차순 정렬
  const counts = [...countMap.values()].sort((a, b) => b - a);

  let total = 0;
  let answer = 0;

  // 많이 있는 귤의 종류부터 선택해서 k개를 넘길 때까지 반복
  for (let count of counts) {
    total += count;
    answer++; // 종류의 수 증가
    if (total >= k) break; // k개 이상의 귤을 선택하면 종료
  }

  return answer; // 최소 종류 수 반환
}

// 프로그래머스 64065 레벨 2

// 첫 풀이
function solution(s) {
  const answer = [];
  let temp = [];

  // 각 집합 내부를 먼저 오름차순 정렬된 배열로 만들기
  const s_arr = s.slice(2, -2).split(/},{/);

  s_arr.forEach((str) => {
    const strArr = str.split(",").map(Number);
    temp.push(strArr);
  });

  // 집합(각 배열) 크기가 작은 순으로 정렬 (오름차순)
  temp.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });

  // 크기가 가장 작은 집합부터 숫자 배열에 넣기
  for (let i = 0; i < temp.length; i++) {
    temp[i].forEach((num) => {
      if (answer.includes(num)) return;
      answer.push(num);
    });
  }

  return answer;
}

// 최적화된 답
function solution(s) {
  const answer = [];
  // 중복된 숫자를 거르는데 includes 대신 set 사용
  // includes -> O(N)
  // Set.has, Set.add -> O(1)
  const usedNumbers = new Set();

  // 문자열 처리 및 숫자 배열로 변환
  // 체이닝 메소드 사용(map,sort도 연결 -> 불필요한 중간 변수 줄임)
  const tuples = s
    .slice(2, -2)
    .split(/},{/)
    .map((subset) => subset.split(",").map(Number));

  // 배열의 길이에 따라 오름차순 정렬
  tuples.sort((a, b) => a.length - b.length);

  // 길이가 작은 집합부터 숫자를 결과 배열에 추가
  tuples.forEach((tuple) => {
    tuple.forEach((num) => {
      if (!usedNumbers.has(num)) {
        usedNumbers.add(num);
        answer.push(num);
      }
    });
  });

  return answer;
}

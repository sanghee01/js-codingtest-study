//  경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return
// 귤 숫자를 키값으로 객체 만듦
// fruit = 첫번째 귤로 초기화
// k만큼 순회
// fruit랑 다르면 answer += 1

function solution(k, tangerine) {
  let answer = 0;
  const fruitObj = {};
  for (const fruit of tangerine) {
    fruitObj[fruit] ? fruitObj[fruit]++ : (fruitObj[fruit] = 1);
  }
  // 객체의 value 기준으로 정렬
  const sorted = Object.entries(fruitObj).sort((a, b) => b[1] - a[1]);

  idx = 0;

  while (idx <= sorted.length - 1 && answer <= k) {
    if (answer >= k) {
      break;
    }
    answer += sorted[idx][1];
    idx++;
  }
  return idx;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));

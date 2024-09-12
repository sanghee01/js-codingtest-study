// 프로그래머스 12915 레벨 1

// 음수가 리턴된다면 a < b를 의미하고,
// 양수가 리턴된다면 a > b를 의미하고,
// 0이 리턴된다면 a == b를 의미한다.

// 방법 1
function solution(strings, n) {
  strings.sort((a, b) => {
    // 인덱스 문자 먼저 비교
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    // 같은 문자라면 사전 순으로 정렬
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return strings;
}

// 방법2 localeCompare 함수 이용
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });

  return strings;
}

console.log("a" < "b");

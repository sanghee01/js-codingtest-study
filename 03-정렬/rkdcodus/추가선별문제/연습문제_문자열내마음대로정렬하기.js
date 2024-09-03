// 프로그래머스 12915 레벨 1

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return strings;
}

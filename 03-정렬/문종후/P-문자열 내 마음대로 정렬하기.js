function solution(strings, n) {
  let answer = strings.sort(function (a, b) {
    if (a[n] > b[n]) return 1;
    else if (a[n] === b[n]) {
      if (a > b) return 1;
      else if (a === b) return 0;
      else if (a < b) return -1;
    } else if (a[n] < b[n]) return -1;
  });
  return answer;
}
console.log(solution(["sun", "bed", "car"], 1));

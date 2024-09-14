function solution(arr, limit) {
  let answer = 0;
  if (arr.length === 1) return 1;
  arr.sort((a, b) => a - b);

  while (arr) {
    if (!arr.length) break;
    if (arr[0] + arr.at(-1) <= limit) {
      arr.shift();
      arr.pop();
      answer++;
    } else {
      arr.pop();
      answer++;
    }
  }
  return answer;
}

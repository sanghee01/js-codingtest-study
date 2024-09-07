function solution(citations) {
  let h = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) h++;
    else break;
  }

  return h;
}

console.log(solution([6, 5, 3, 3, 0]));

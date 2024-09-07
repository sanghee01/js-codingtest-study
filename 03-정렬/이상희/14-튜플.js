function solution(s) {
  const answer = [];

  // 배열로 만들기
  s = s.replaceAll("{", "[");
  s = s.replaceAll("}", "]");
  s = JSON.parse(s);

  // 배열 길이 순으로 정렬
  s.sort((a, b) => a.length - b.length);

  // answer에 없는 수 차례대로 push
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!answer.includes(s[i][j])) answer.push(s[i][j]);
    }
  }

  return answer;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));

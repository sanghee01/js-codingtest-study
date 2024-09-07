function solution(s) {
  let answer = [];
  const result = s
    .slice(2, -2) // 처음과 끝의 바깥 중괄호 제거
    .split("},{") // '},{'로 구분하여 배열로 나눔
    .map((group) => group.split(",").map(Number))
    .sort((a, b) => a.length - b.length); // 각 그룹을 쉼표로 나누고 숫자로 변환
  answer.push(result[0][0]);
  for (let i = 1; i < result.length; i++) {
    let a = result[i].filter((v) => !answer.includes(v));

    answer.push(a[0]);
  }
  return answer;
}
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));

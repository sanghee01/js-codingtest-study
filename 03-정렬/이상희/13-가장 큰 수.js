function solution(numbers) {
  // 숫자를 문자열로 변환한 후, 두 숫자를 이어붙였을 때 더 큰 값을 기준으로 정렬
  numbers.sort((a, b) => {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    return ba - ab;
  });

  let answer = numbers.join("");

  // 모든 숫자가 0일 경우
  if (answer[0] === "0") return "0";

  return answer;
}

console.log(solution([3, 30, 34, 5, 9]));

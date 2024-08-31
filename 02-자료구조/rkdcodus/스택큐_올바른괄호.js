// 프로그래머스 12909

function solution(s) {
  let answer = true;
  const arr_s = s.split("");
  const stack = [];

  for (let i = 0; i < arr_s.length; i++) {
    if (arr_s[i] === "(") stack.push(i);
    else if (arr_s[i] === ")") {
      if (!stack.length) {
        answer = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length) answer = false;

  return answer;
}

function solution(s) {
  let arr = s.split("");
  let stack = [];

  // 맨 처음이 ')'이거나 맨 마지막이 '('이면 괄호가 아님(false)
  if (arr[0] === ")" || arr.at(-1) === "(") {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(arr[i]); // '('일때 스택에 넣기
    else if (arr[i] === ")") {
      // ')'이면 스택에서  pop하는데, 스택에 아무 값이 없으면 false
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  // 스택에 남아있는 값이 있으면 false
  if (stack.length > 0) return false;
  return true;
}

console.log(solution("()()"));

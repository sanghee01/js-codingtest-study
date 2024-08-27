function solution(s) {
  var answer = true;

  let stack = [];

  for (const iterator of s) {
    if (iterator === ")" && stack && stack[stack.length - 1] === "(") {
      stack.pop();
      // )에 대응하는 (이 스택에 없다면 false
    } else if (iterator === ")" && stack.length === 0) {
      return false;
    } else {
      stack.push(iterator);
    }
  }
  if (stack.length) {
    return false;
  }
  return answer;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const palindrome = (x) => {
  return x === x.split("").reverse().join("");
};

const solution = (data) => {
  let n = data.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (data[left] !== data[right]) {
      // 유사 회문 검사 (왼쪽 또는 오른쪽에서 하나를 제거한 후 회문 확인)
      let skipLeft = data.slice(left + 1, right + 1); // 왼쪽 문자 제거
      let skipRight = data.slice(left, right); // 오른쪽 문자 제거
      if (palindrome(skipLeft) || palindrome(skipRight)) {
        return 1; // 유사 회문
      } else {
        return 2; // 회문도 유사 회문도 아님
      }
    }
    left++;
    right--;
  }
  return 0; // 회문
};

let testCases = Number(input[0]);

for (let tc = 1; tc <= testCases; tc++) {
  let data = input[tc].trim();
  console.log(solution(data));
}

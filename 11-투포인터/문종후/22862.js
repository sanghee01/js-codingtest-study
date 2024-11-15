// 백준-블로그,
//유형: 투포인터
//문제링크:https://www.acmicpc.net/problem/22862
//난이도:골드5
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const nums = [0];

function sol() {
  let answer = 0;

  let temp = input[1].split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    nums.push(temp[i]);
  }

  let start = 0;
  let cnt = 0,
    sum = 0;
  for (let end = 1; end <= N; end++) {
    if (cnt === K && nums[end] % 2 !== 0) {
      // 다썻는데 또 홀수 만났을때 계산.
      if (sum > answer) answer = sum;
      start++;
      while (nums[start] % 2 === 0) {
        sum--;
        start++;
      }
      cnt--;
    }
    if (nums[end] % 2 === 0) {
      sum++;
    } else {
      cnt++;
    }
    if (end === N && cnt <= K) {
      if (sum > answer) answer = sum;
    }
  }

  console.log(answer);
}

sol();

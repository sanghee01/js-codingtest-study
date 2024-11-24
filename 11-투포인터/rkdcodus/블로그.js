const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, x] = input[0];
const history = input[1];
let answer = [0, 0];

/**
 * 백준 21921 실3
 * 슬라이딩 윈도우 (고정 크기 윈도우 사용)
 */
let start = 0;
let end = 0;
let count = 0;

while (end < n) {
  if (end - start === x - 1) {
    count += history[end];

    if (answer[0] < count) {
      answer[0] = count;
      answer[1] = 1;
    } else if (answer[0] === count) {
      answer[1] += 1;
    }

    start += 1;
    end += 1;
    count -= history[start - 1];
    continue;
  }
  count += history[end];
  end += 1;
}

if (answer[0] === 0) return console.log("SAD");
console.log(answer.join("\n"));

// 백준 1946 실버 1
// 혼자 풀기 실패

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = [];

const peekNewPeole = (n, arr) => {
  const sorted = arr.sort((a, b) => a[0] - b[0]);
  let rank = sorted[0][1];
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (rank < sorted[i][1]) continue;
    rank = sorted[i][1];
    count += 1;
  }
  return count;
};

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 1) {
    const count = peekNewPeole(input[i][0], input.slice(i + 1, i + input[i][0] + 1));
    answer.push(count);
  }
}

answer.forEach((i) => console.log(i));

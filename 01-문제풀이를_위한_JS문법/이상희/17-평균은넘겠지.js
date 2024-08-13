const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let C = Number(input[0]);

let answer = "";

for (let i = 1; i <= C; i++) {
  let scores = input[i].split(" ").map(Number);
  let N = scores[0];
  scores.shift();
  let average = scores.reduce((a, b) => a + b) / N;
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (scores[j] > average) count++;
  }
  let ratio = ((count / N) * 100).toFixed(3);
  answer += ratio + "%" + "\n";
}

console.log(answer);

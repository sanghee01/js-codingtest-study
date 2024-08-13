const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  let list = S.split("");
  let answer = "";
  for (let j = 0; j < list.length; j++) {
    answer += list[j].repeat(R);
  }
  console.log(answer);
}

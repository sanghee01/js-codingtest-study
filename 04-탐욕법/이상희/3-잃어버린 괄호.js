let input = require("fs").readFileSync("../../input.txt").toString().trim();

let numbers = input.split("-");
let answer = 0;

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  if (i == 0) answer += current;
  else answer -= current;
}

console.log(answer);

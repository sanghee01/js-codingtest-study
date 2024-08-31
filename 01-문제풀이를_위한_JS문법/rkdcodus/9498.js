const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let answer = "F";

if (input >= 90) answer = "A";
else if (input >= 80) answer = "B";
else if (input >= 70) answer = "C";
else if (input >= 60) answer = "D";

console.log(answer);

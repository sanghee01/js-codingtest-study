const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}
let sortedArr = arr.sort(function (a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(sortedArr.map((el) => el.join(" ")).join("\n"));

// 다른풀이

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((el) => el.split(" ").map(Number));

const solution = (input) => {
  return input
    .sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
      }
      return a[0] - b[0];
    })
    .map((el) => el.join(" "))
    .join("\n");
};

console.log(solution(input));

const fs = require("fs");
const [[n, m], ...arr] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));
const ans = [];

kArray = arr.slice(n + 1);

for (let [i, j, x, y] of kArray) {
  //console.log('🍀', i, j, x, y);
  let sum = 0;

  for (a = i; a <= x; a++) {
    for (b = j; b <= y; b++) {
      sum += arr[a - 1][b - 1];
    }
  }
  ans.push(sum);
}
console.log(ans.join("\n"));

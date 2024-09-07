const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
input.shift();
const arr = input
  .map((el) => el.split(" ").map(Number))
  .sort(function (a, b) {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

let result = "";
arr.forEach((arr) => (result += `${arr[0]} ${arr[1]}\n`));
console.log(result);

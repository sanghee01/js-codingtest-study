const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = input[0];
const arr = [];
for (let i = 1; i <= number; i++) {
  arr.push(input[i]);
}

const newarr = [...new Set(arr)];
newarr.sort(function (a, b) {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let i = 0; i < newarr.length; i++) {
  console.log(newarr[i]);
}

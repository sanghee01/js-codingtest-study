let s = Number(require("fs").readFileSync("../../input.txt").toString());

let current = 0;
let sum = 0;

while (sum <= s) {
  current++;
  sum += current;
}

console.log(current - 1);

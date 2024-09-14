const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim();
let n = Number(input);
let number = 0;

while (true) {
  if (n % 5 === 0) {
    number += n / 5;
    n = 0;
  }
  if (n === 0) {
    console.log(number);
    return;
  }
  n -= 2;
  number++;
  if (n < 0) {
    console.log(-1);
    return;
  }
}

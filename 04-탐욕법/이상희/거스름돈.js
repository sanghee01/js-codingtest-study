let n = Number(require("fs").readFileSync("../../input.txt").toString());

let count = 0;

while (n > 0) {
  if (n % 5 === 0) {
    count += n / 5;
    break;
  }
  n -= 2;
  count++;
}

if (n < 0) console.log(-1);
else console.log(count);

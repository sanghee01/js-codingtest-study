const n = Number(require("fs").readFileSync("../input.txt").toString().trim());

let answer = "";

for (let i = 1; i <= 9; i++) {
  answer += `${n} * ${i} = ${n * i}\n`;
}

console.log(answer);

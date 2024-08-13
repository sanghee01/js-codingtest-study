const n = Number(require("fs").readFileSync("../input.txt").toString().trim());

let answer = "";

for (let i = 1; i <= n; i++) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");
let N = Number(input[0]);
let K = Number(input[1]);

let sum = (K * (K + 1)) / 2;
if (sum > N) return console.log(-1);
N -= sum;
if (N % K === 0) return console.log(K - 1);
else if (N % K !== 0) return console.log(K);

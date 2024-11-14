const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const AList = input[1].split(" ").map(Number);
const BList = input[2].split(" ").map(Number);

AList.push(...BList);

console.log(AList.sort((a, b) => a - b).join(" "));

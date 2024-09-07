// 백준 2752 브론즈4

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input.sort((a, b) => a - b).join(" "));

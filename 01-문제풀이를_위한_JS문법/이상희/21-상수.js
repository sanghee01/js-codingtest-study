const [A, B] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(
  Math.max(Number([...A].reverse().join("")), Number([...B].reverse().join("")))
);

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

let [h, m] = input[0].split(" ").map(Number);
const TIME = Number(input[1]);

let totalMinute = h * 60 + m + TIME;
totalMinute %= 1440; // 하루 지난 것 고려
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour, minute);

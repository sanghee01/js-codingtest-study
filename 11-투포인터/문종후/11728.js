const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);
const result = [].concat(arr1, arr2).sort((a, b) => a - b);
console.log(result.join(" "));

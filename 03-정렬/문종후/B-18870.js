// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const n = input.shift();
// let map = new Map();

// let arr = [
//   ...new Set(
//     input[0]
//       .split(" ")
//       .map(Number)
//       .slice()
//       .sort((a, b) => a - b)
//   ),
// ];

// arr.forEach((n, i) => map.set(n, i));
// let line = input[0].split(" ").map(Number);
// let str = "";
// for (let i = 0; i < line.length; i++) {
//   str += map.get(line[i]) + " ";
// }
// console.log(str);
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const N = input[0].length;
const arr = input[1].split(" ").map(Number);

function countSmallerValues(arr) {
  let result = [];
  let sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let count = binarySearch(sorted, arr[i]);
    result.push(count);
  }

  console.log(result);
}

function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

countSmallerValues(arr);

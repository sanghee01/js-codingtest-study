const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, H] = input[0].split(" ").map(Number); // 나무 수, 필요 높이
const arr = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(높이)
  let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양
  for (let x of arr) {
    total += mid < x && x - mid;
  }

  if (total < H) {
    end = mid - 1; // 나무 양이 부족한 경우 더 많이 자르기(높이 줄이기)
  } else {
    // 나무의 양이 충분하면 덜 자르기(높이 키우기)
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);

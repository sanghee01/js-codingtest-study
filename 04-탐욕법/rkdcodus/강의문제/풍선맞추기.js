// 백준 11509 골드 5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 혼자풀기 : 시간초과 O(n^2)
// 배열에 남아있는 풍선 중 가장 높은 높이를 찾는다.
// 정한 높이에 있는 풍선을 만나면 높이는 한칸 줄어든다.
const findHeight = () => {
  let maxHeight = 0;
  for (let i = 0; i < input[0][0]; i++) {
    if (maxHeight < input[1][i]) {
      maxHeight = input[1][i];
    }
  }

  return maxHeight;
};

let height = findHeight();
let count = 0;

while (height > 0) {
  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] === height) {
      input[1][i] = 0;
      height -= 1;
    }
  }
  height = findHeight();
  count += 1;
}

console.log(count);

// 방법 2
// 배열을 한번만 순회한다.
// 해당 높이에 화살이 있다면 그 화살은 한칸 낮추기. 풍선터짐.
// 해당 높이에 화살이 없다면 화살 추가. 한칸 낮추기. 풍선터짐.
let count = 0;
const arrows = Array.from({ length: input[0][0] }, () => 0);

for (let i = 0; i < input[0][0]; i++) {
  const h = input[1][i]; // 현재 풍선의 높이
  if (arrows[h] > 0) {
    // 현재 풍선의 높이에 화살이 있음.
    arrows[h - 1] += 1; // 화살 높이가 낮아짐.
    arrows[h] -= 1;
  } else {
    // 현재 풍선 높이에 화살이 없음.
    count += 1; // 화살 추가.
    arrows[h - 1] += 1; //  화살은 바로 한칸 낮춤.
  }
}

console.log(count);

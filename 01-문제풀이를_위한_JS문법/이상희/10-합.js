const n = Number(require("fs").readFileSync("../input.txt").toString().trim());

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);

// 💡 등차수열의 합 공식으로 푸는 방법도 좋은 것 같다!
//  console.log(n * (n + 1) / 2);

// 백준 1904 실3
/*
1  n=1  1
2  n=2  00, 11
3  n=3  100, 001, 111 =?> 10000, 00100, 11100
5  n=4  1001, 1100, 0011, 1111, 0000 => 10011, 11001, 00111, 11111, 00001
8  n=5  11001, 10011, 11100, 00111, 11111, 10000, 00001, 00100  
   n=6  
ni = ni-1 + ni-2
하향식으로 작성했을 땐 stack size exceeded 에러 발생
*/

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const dpArr = Array.from({ length: input + 1 }, () => 0);
dpArr[1] = 1;
dpArr[2] = 2;

for (let i = 3; i <= input; i++) {
  dpArr[i] = (dpArr[i - 1] + dpArr[i - 2]) % 15746;
}

console.log(dpArr[input]);

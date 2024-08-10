/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2525                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2525                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 12:42:45 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);
const C = Number(input[1]);

const addedH = Math.floor(C / 60);
const addedM = C % 60;

A += addedH;
B += addedM;

if (B >= 60) {
  B = B - 60;
  A += 1;
}

if (A > 23) {
  A = A - 24;
}

// console.log(A, B);

// 분으로 환산 후, 처리하는 방법
let totalMinute = A * 60 + B + C;
totalMinute %= 1440; // 24시간 * 60분으로 나누기

let hour = Math.floor(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour, minute);

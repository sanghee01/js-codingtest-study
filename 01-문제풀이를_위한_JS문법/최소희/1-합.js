/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 8393                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/8393                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 13:40:25 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const number = Number(input[0]);

let res = 0;
for (let i = 0; i <= number; i++) {
  res += i;
}

// console.log(res);

// 2. 등차수열의 합
/* 등차수열의 제 1항부터 제 N항까지의 합은 S이라고 하자.
 * 첫째 항이 a, 마지막 항이 l일 때: Sn = N(a+l)/2
 */

console.log((number * (1 + number)) / 2);

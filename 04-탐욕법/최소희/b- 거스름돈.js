/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 14916                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/14916                          #+#        #+#      #+#    */
/*   Solved: 2024/09/14 19:13:05 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

let money = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

let answer = 0;

while (money >= 0) {
  if (money % 5 === 0) break;

  money -= 2;
  answer += 1;
}

answer += Math.floor(money / 5);
money %= 5;

if (money) console.log(-1);
else console.log(answer);

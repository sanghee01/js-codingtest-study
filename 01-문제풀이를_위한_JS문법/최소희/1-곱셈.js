/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2588                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2588                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 10:24:34 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input;

let result = 0;

for (let i = 0; i < b.length; i++) {
  const base = 10 ** i || 1;

  const current = Number(a) * Number(b[b.length - 1 - i]);
  result += current * base;

  console.log(current);
}
console.log(result);

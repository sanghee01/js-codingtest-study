/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4344                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4344                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 14:25:28 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const C = Number(input[0]);

for (let i = 0; i < C; i++) {
  const [N, ...scores] = input[i + 1].split(" ").map(Number);

  const avg = scores.reduce((acc, cur) => acc + cur, 0) / N;

  const avgUp = scores.filter((score) => score > avg);

  const res = ((avgUp.length / N) * 100).toFixed(3);

  console.log(`${res}%`);
}

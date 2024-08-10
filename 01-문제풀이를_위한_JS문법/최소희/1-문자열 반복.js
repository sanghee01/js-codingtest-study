/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2675                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2675                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 14:54:30 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = input[0];

for (let i = 0; i < T; i++) {
  let [R, S] = input[i + 1].split(" ");

  const res = [];

  R = Number(R);
  const words = S.split("");

  words.map((word) => res.push(word.repeat(R)));

  console.log(res.join(""));
}

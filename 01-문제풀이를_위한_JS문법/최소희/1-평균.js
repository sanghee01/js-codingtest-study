/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1546                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1546                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 14:40:35 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const scores = input[1].split(" ").map(Number);

const highest = Math.max(...scores);

const newScores = [];

for (let i = 0; i < N; i++) {
  newScores.push((scores[i] / highest) * 100);
}

console.log(newScores.reduce((acc, cur) => acc + cur) / N);

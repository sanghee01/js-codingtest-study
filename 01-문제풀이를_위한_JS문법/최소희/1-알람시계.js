/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2884                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2884                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 10:58:16 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [H, M] = input[0].split(" ").map(Number);

if (M < 45) {
  M = 60 - (45 - M);
  if (H === 0) {
    H = 23;
  } else {
    H -= 1;
  }
} else {
  M -= 45;
}

console.log(H, M);

/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10818                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10818                          #+#        #+#      #+#    */
/*   Solved: 2024/08/10 14:10:16 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[1].split(" ").map(Number);

let min = 1000000,
  max = -1000000;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) max = nums[i];
  if (nums[i] < min) min = nums[i];
}

console.log(min, max);

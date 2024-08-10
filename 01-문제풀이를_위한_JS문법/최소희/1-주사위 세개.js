/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2480                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2480                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 13:06:14 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[0].split(" ").map(Number);

const arr = Array(7).fill(0);

nums.forEach((num) => (arr[num] += 1));

const maxLength = Math.max(...arr);

const indices = arr
  .map((length, index) => (length === maxLength ? index : -1))
  .filter((index) => index !== -1);

const eye = Math.max(...indices);

let response = 0;
if (maxLength === 3) response += 10000 + 1000 * eye;
if (maxLength === 2) response += 1000 + 100 * eye;
if (maxLength === 1) response += 100 * eye;

console.log(response);

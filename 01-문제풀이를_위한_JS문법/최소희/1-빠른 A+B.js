/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 15552                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/15552                          #+#        #+#      #+#    */
/*   Solved: 2024/08/10 13:57:02 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
rl.on("line", (line) => {
  const input = line.split(" ");

  if (input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A + B + "\n";
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);
let res = "";

for (let i = 1; i <= testCase; i++) {
  const data = input[i].split(" ");
  const a = Number(data[0]);
  const b = Number(data[1]);
  res += a + b + "\n";
  console.log(res);
}

console.log(res);

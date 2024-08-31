/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1316                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1316                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 15:02:45 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

let res = 0;
for (let i = 0; i < N; i++) {
  const arr = input[i + 1].split("");
  const map = new Map();

  let isGroupWord = true;
  let current = arr[0];
  map.set(current, 1);

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === current) {
      continue;
    } else {
      current = arr[j];
      if (map.has(current)) {
        isGroupWord = false;
      } else {
        map.set(current);
      }
    }
  }

  if (isGroupWord) res += 1;
}

console.log(res);

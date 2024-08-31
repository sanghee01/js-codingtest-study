/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9498                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9498                           #+#        #+#      #+#    */
/*   Solved: 2024/08/10 10:42:35 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const getGrade = (number) => {
  if (number >= 90) {
    return console.log("A");
  }
  if (number < 90 && number >= 80) {
    return console.log("B");
  }
  if (number < 80 && number >= 70) {
    return console.log("C");
  }
  if (number < 70 && number >= 60) {
    return console.log("D");
  }

  return console.log("F");
};

getGrade(Number(input[0]));

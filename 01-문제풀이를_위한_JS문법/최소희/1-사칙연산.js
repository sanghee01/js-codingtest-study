/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10869                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10869                          #+#        #+#      #+#    */
/*   Solved: 2024/08/10 10:17:09 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);

const math = ["+", "-", "*", "/", "%"];

math.forEach((item) => {
  switch (item) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(parseInt(a / b));
      break;
    case "%":
      console.log(a % b);
      break;
    default:
      break;
  }
});

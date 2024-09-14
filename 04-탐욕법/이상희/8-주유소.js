const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const kmList = input[1].split(" ").map(Number);
const priceList = input[2].split(" ").map(Number);

let minPrice = priceList[0];
let sum = BigInt(0);

for (let i = 0; i < kmList.length; i++) {
  if (priceList[i] < minPrice) minPrice = priceList[i];
  sum += BigInt(minPrice) * BigInt(kmList[i]);
}

console.log(String(sum));

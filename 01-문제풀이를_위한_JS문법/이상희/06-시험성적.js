const n = Number(require("fs").readFileSync("../input.txt").toString().trim());

if (n >= 90) console.log("A");
else if (n >= 80) console.log("B");
else if (n >= 70) console.log("C");
else if (n >= 60) console.log("D");
else console.log("F");

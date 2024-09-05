// 프로그래머스 42746 레벨 2

function solution(numbers) {
  numbers.sort((a, b) => {
    const AB = String(a) + String(b);
    const BA = String(b) + String(a);

    if (AB > BA) return -1;
    if (AB < BA) return 1;
    return 0;
  });
  if (numbers[0] === 0) return "0";
  return numbers.join("");
}

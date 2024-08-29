function solution(answers) {
  let answer = [];
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let su1 = 0;
  let su2 = 0;
  let su3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % 5]) {
      su1++;
    }
    if (answers[i] === supo2[i % 8]) {
      su2++;
    }
    if (answers[i] === supo3[i % 10]) {
      su3++;
    }
  }
  let arr = [su1, su2, su3];
  const max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (max == arr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
solution([1, 3, 2, 4, 2]);

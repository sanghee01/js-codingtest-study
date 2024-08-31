function solution(N, stages) {
  let object = {};
  for (let i = 0; i < stages.length; i++) {
    if (Object.keys(object).map(Number).includes(stages[i])) {
      object[stages[i]] = object[stages[i]] + 1;
    } else {
      object[stages[i]] = 1;
    }
  }
  let answer = [];
  let num = stages.length;
  for (let i = 1; i <= N; i++) {
    let 실패율;
    if (!object[i]) {
      object[i] = 0;
    }

    실패율 = object[i] / num;

    answer.push([i, 실패율]);
    num = num - object[i];
  }
  answer.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  let result = [];
  for (let i = 0; i < answer.length; i++) {
    result.push(answer[i][0]);
  }
  return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

function solution(N, stages) {
  const arr = Array(N + 2).fill(0);

  for (let i = 0; i < stages.length; i++) {
    const current = stages[i];

    arr[current] += 1;
  }

  const percentArr = Array(N + 2).fill(0);
  let all = stages.length;
  let idx = 1;
  while (all >= 0) {
    percentArr[idx] = arr[idx] / all;

    all -= arr[idx];
    idx++;

    if (all === 0) break;
  }

  const indexedArr = percentArr
    .slice(0, -1)
    .map((value, index) => ({ value, index }));

  console.log(indexedArr);

  const sortedArr = indexedArr.slice(1).sort((a, b) => b.value - a.value);

  return sortedArr.map((data) => data.index);
}

console.log(solution(4, [4, 4, 4, 4]));

// 2번째 방법
function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((x) => x >= i).length;
    const curr = stages.filter((x) => x === i).length;

    result.push([i, curr / reach]);
  }

  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}

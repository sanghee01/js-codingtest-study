function solution(arr) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    const firstIdx = i % first.length;
    const secondIdx = i % second.length;
    const thirdIdx = i % third.length;

    if (arr[i] === first[firstIdx]) counts[0] += 1;
    if (arr[i] === second[secondIdx]) counts[1] += 1;
    if (arr[i] === third[thirdIdx]) counts[2] += 1;
  }

  const max = Math.max(...counts);

  const res = [];

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === max) res.push(i + 1);
  }

  return res;
}

console.log(solution([1, 3, 2, 4, 2]));

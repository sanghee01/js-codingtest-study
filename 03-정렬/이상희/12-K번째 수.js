function solution(array, commands) {
  const answer = [];
  for (let arr of commands) {
    let list = array
      .slice(Number(arr[0]) - 1, Number(arr[1]))
      .sort((a, b) => a - b);
    answer.push(list[arr[2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

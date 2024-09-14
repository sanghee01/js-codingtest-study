function solution(n, stations, w) {
  let answer = 0;

  const cover = w * 2 + 1;

  let start = 1;

  for (let i = 0; i < stations.length; i++) {
    const stationLeft = stations[i] - w;

    if (start < stationLeft) {
      const gap = stationLeft - start;
      answer += Math.ceil(gap / cover);
    }

    start = stations[i] + w + 1;
  }

  if (start <= n) {
    const remain = n - start + 1;
    answer += Math.ceil(remain / cover);
  }

  return answer;
}

/**
 * 1. 설치된 기지국 기준 왼쪽 마지막 구간부터 첫 구간까지를 w를 나눈 것이
 */

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));

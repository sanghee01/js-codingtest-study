function solution(n, stations, w) {
  let count = 0; // 추가 기지국 수
  let position = 1; // 현재 탐색할 아파트의 위치
  const coverage = 2 * w + 1; // 기지국 하나가 커버할 수 있는 범위

  // 각 기지국을 순차적으로 처리
  for (let station of stations) {
    const left = station - w; // 기지국이 커버하는 왼쪽 범위

    // 기지국의 왼쪽 범위보다 현재 아파트 위치가 더 작으면, 기지국이 커버하지 못하는 구간이 존재
    if (position < left) {
      const gap = left - position; // 커버하지 못하는 구간의 길이
      count += Math.ceil(gap / coverage); // 그 구간을 커버할 기지국의 수를 계산
    }

    // 현재 위치를 기지국이 커버하는 오른쪽 범위의 다음 위치로 이동
    position = station + w + 1;
  }

  // 마지막 기지국 이후에 남은 구간이 있으면 처리
  if (position <= n) {
    const gap = n - position + 1; // 마지막 기지국 이후의 남은 구간 길이
    count += Math.ceil(gap / coverage); // 그 구간에 필요한 기지국 수를 계산
  }

  return count;
}

console.log(solution(11, [4, 11], 1));

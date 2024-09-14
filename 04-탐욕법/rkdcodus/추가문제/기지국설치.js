// 프로그래머스 12979 레벨 3

// 방법1 실패: 시간초과 test 1,2,4
function solution(n, stations, w) {
  const newStations = [];
  let first = 0;
  let answer = 0;

  stations.forEach((st) => {
    const last = st - w - 1;
    const newStation = Math.ceil((last - first) / (w * 2 + 1));
    answer += newStation;
    first = st + w;
  });

  if (first <= n) answer += Math.ceil((n - first) / (w * 2 + 1));

  return answer;
}

// 방법 2 실패: 시간초과 test1, 2
function solution(n, stations, w) {
  const newStations = [];
  const range = w * 2 + 1;
  let first = 0;
  let answer = 0;
  let index = 0;

  while (index < stations.length) {
    const last = stations[index] - w - 1;
    const newStation = Math.ceil((last - first) / range);
    answer += newStation;
    first = stations[index] + w;
    index += 1;
  }

  if (first <= n) answer += Math.ceil((n - first) / range);

  return answer;
}

// 방법 3 실패: 시간초과 test1
function solution(n, stations, w) {
  const newStations = [];
  const range = w * 2 + 1;
  let first = 0;
  let answer = 0;
  let index = 0;

  while (index < stations.length) {
    const last = stations[index] - w - 1;
    answer += Math.ceil((last - first) / range);
    first = stations[index] + w;
    index += 1;
  }

  if (first <= n) answer += Math.ceil((n - first) / range);

  return answer;
}

// 방법 4 통과 2.30ms
function solution(n, stations, w) {
  const newStations = [];
  let first = 0;
  let answer = 0;
  let index = 0;

  while (index < stations.length) {
    const last = stations[index] - w - 1;
    answer += Math.ceil((last - first) / (w * 2 + 1));
    first = stations[index] + w;
    index += 1;
  }

  if (first <= n) answer += Math.ceil((n - first) / (w * 2 + 1));

  return answer;
}

// 방법 5 통과 2.29ms
function solution(n, stations, w) {
  const newStations = [];
  let first = 0;
  let answer = 0;

  for (let i = 0; i < stations.length; i++) {
    const last = stations[i] - w - 1;
    answer += Math.ceil((last - first) / (w * 2 + 1));
    first = stations[i] + w;
  }

  if (first <= n) answer += Math.ceil((n - first) / (w * 2 + 1));

  return answer;
}
